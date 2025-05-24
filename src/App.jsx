import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api.js";
import { CurrentUserContext } from "./contexts/currentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
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

  const handleUpdateUser = async (data) => {
    const updatedUser = await api.updateUserInfo(data);
    setCurrentUser(updatedUser);
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
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
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
