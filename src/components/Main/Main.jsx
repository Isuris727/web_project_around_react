import EditAvatar from "./Popup/Form/EditAvatar/EditAvatar";
import NewCard from "./Popup/Form/NewCard/NewCard";
import EditProfile from "./Popup/Form/EditProfile/EditProfile";
import Card from "./Card/Card";
import Popup from "./Popup/Popup";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useState, useEffect, useContext } from "react";

function Main(props) {
  const { onOpenPopup, onClosePopup, popup } = props;

  const { currentUser } = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);
  const [cards, setCards] = useState([]);
  const [isLiked, setIsLiked] = useState(false);

  // --------- USERPROFILE -------

  useEffect(() => {
    async function updateAvatar(data) {
      try {
        const updatedAvatar = await api.getUserInfo();

        setAvatar(updatedAvatar.avatar);
      } catch (error) {
        console.log(error);
      }
    }
    updateAvatar();
  }, [avatar]);

  const onChangeAvatar = async () => {
    const updatedAvatar = await api.getUserInfo();
    return setAvatar(updatedAvatar.avatar);
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

  const handleCardDelete = async (card) => {
    card._id && (await api.deleteCard(card._id));

    const idCardToDelete = card._id;

    const filteredCards = cards.filter((card) => card._id !== idCardToDelete);
    setCards(filteredCards);
  };

  // --------- POPUPS -------
  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar onChangeAvatar={onChangeAvatar} />,
  };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  return (
    <main className="main page__main">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__overlay"
            onClick={() => {
              onOpenPopup(editAvatarPopup);
            }}
          >
            <img
              className="button__img button__img_type_overlay-edit"
              alt="editar"
              src="./../images/Vector_edit.png"
            />
            <img className="profile__img" alt="Imagen de perfil" src={avatar} />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="button button_type_edit"
                type="button"
                onClick={() => {
                  onOpenPopup(editProfilePopup);
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
            onOpenPopup(newCardPopup);
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
              openImagePopup={onOpenPopup}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={onClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
