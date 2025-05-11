import EditAvatar from "./Popup/Form/EditAvatar/EditAvatar";
import NewCard from "./Popup/Form/NewCard/NewCard";
import EditProfile from "./Popup/Form/EditProfile/EditProfile";
import Card from "./Card/Card";
import Popup from "./Popup/Popup";
import ImagePopup from "./Popup/ImagePopup";
import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

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
              src="/default_avatar.png"
            />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name">Name</h1>
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
            <p className="profile__about-me">About</p>
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
            <Card key={card._id} card={card} openImagePopup={handleOpenPopup} />
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
