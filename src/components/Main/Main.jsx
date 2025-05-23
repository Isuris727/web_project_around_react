import EditAvatar from "./Popup/Form/EditAvatar/EditAvatar";
import NewCard from "./Popup/Form/NewCard/NewCard";
import EditProfile from "./Popup/Form/EditProfile/EditProfile";
import Card from "./Card/Card";
import Popup from "./Popup/Popup";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useState, useEffect, useContext, useCallback } from "react";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const currentUser = useContext(CurrentUserContext);

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

  // --------- POPUPS -------
  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main page__main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__overlay"
            onClick={() => {
              handleOpenPopup(editAvatarPopup);
            }}
          >
            <img
              className="button__img button__img_type_overlay-edit"
              alt="editar"
              src="./../images/Vector_edit.png"
            />
            <img
              className="profile__img"
              alt="Imagen de perfil"
              src={currentUser.avatar}
            />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="button button_type_edit"
                type="button"
                onClick={() => {
                  handleOpenPopup(editProfilePopup);
                }}
              >
                <img
                  className="button__img button__img_type_edit"
                  alt="editar"
                  src="./../images/Vector_edit.png"
                />
              </button>
            </div>
            <p className="profile__about-me">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="button button_type_add"
          type="button"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        >
          <img
            className="button__img button__img_type_add"
            alt="Agregar"
            src="./../images/Vector_add.png"
          />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__cards">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              openImagePopup={handleOpenPopup}
              onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
