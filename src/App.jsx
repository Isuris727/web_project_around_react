import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import api from "./utils/api.js";
import { CurrentUserContext } from "./contexts/currentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

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

  // --------- CARDS -------
  useEffect(() => {
    async function obtainCardsData() {
      try {
        const cardsData = await api.getCardsData();

        return setCards(cardsData);
      } catch (error) {
        console.log(error);
      }
    }
    obtainCardsData();
  }, [isLiked]);

  const handleCardLike = async (card) => {
    card._id && card.isLiked
      ? await api._dislikeCard(card._id)
      : await api._likeCard(card._id);

    setIsLiked(!isLiked);
  };

  const handleAddCard = async (data) => {
    const addedCard = await api.addCardData(data);
    setCards([addedCard, ...cards]);
    handleClosePopup();
  };

  const handleCardDelete = async (card) => {
    card._id && (await api.deleteCard(card._id));

    const idCardToDelete = card._id;

    const filteredCards = cards.filter((card) => card._id !== idCardToDelete);
    setCards(filteredCards);
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddCard={handleAddCard}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
