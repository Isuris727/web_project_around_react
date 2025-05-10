function NewCard() {
  return (
    <form className="elements__form popup__form form" name="newCardForm">
      <h2 className="form__title">Nuevo lugar</h2>
      <input
        className="form__input form__input_type_name"
        id="card-title-input"
        type="text"
        placeholder="Titulo"
        required
        minLength="2"
        maxLength="30"
      />
      <span className="card-title-input-error form__input-error"></span>
      <input
        className="form__input form__input_type_about"
        id="card-url-input"
        type="url"
        placeholder="Enlace del lugar"
        required
      />
      <span className="card-url-input-error form__input-error"></span>
      <button className="button button_type_submit form__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
