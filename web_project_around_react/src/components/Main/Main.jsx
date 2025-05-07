function Main() {
  return (
    <main className="main page__main">
      <section className="profile">
        <div className="profile__container">
          <div className="profile__overlay">
            <img
              className="button__img button__img_type_overlay-edit"
              alt="editar"
              src="./../images/Vector_edit.png"
            />
            <img className="profile__img" alt="Imagen de perfil" src=" " />
          </div>
          <div className="profile__info">
            <div className="profile__title">
              <h1 className="profile__name"></h1>
              <button className="button button_type_edit" type="button">
                <img
                  className="button__img button__img_type_edit"
                  alt="editar"
                  src="./../images/Vector_edit.png"
                />
              </button>
            </div>
            <p className="profile__about-me"></p>
          </div>
        </div>
        <button className="button button_type_add" type="button">
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
    </main>
  );
}

export default Main;
