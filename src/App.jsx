import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api.js";
import { CurrentUserContext } from "./contexts/currentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // const [avatar, setAvatar] = useState(currentUser.avatar);
  const [popup, setPopup] = useState(null);

  // --------- User -------
  useEffect(() => {
    async function obtainUser() {
      try {
        const user = await api.getUserInfo();

        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    obtainUser();
  }, []);

  console.log(currentUser);

  const handleUpdateUser = async (data) => {
    const updatedUser = await api.updateUserInfo(data);
    setCurrentUser(updatedUser);
    handleClosePopup();
  };

  // const handleChangeAvatar = (data) => {
  //   setAvatar(data);
  // };

  const handleUpdateAvatar = async (data) => {
    const updatedAvatar = await api.changeAvatar(data);
    handleClosePopup();
  };

  // --------- POPUPS -------
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Header />

        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
