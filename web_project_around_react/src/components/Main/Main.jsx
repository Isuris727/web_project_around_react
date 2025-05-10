import EditAvatar from "./Popup/Form/EditAvatar/EditAvatar";
import NewCard from "./Popup/Form/NewCard/NewCard";
import EditProfile from "./Popup/Form/EditProfile/EditProfile";
import Popup from "./Popup/Popup";
import { useState } from "react";

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
            <img className="profile__img" alt="Imagen de perfil" src=" " />
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
        <div className="elements__cards"></div>
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
