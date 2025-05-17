import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import apiClass from "./utils/api.js";
import { CurrentUserContext } from "./contexts/currentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function obtainUser() {
      try {
        const user = await apiClass.getUserInfo();

        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      }
    }
    obtainUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        <Main />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
