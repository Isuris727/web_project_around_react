function NewCard() {
  return (
    <form class="elements__form popup__form form" name="newCardForm">
      <h2 class="form__title">Nuevo lugar</h2>
      <input
        class="form__input form__input_type_name"
        id="card-title-input"
        type="text"
        placeholder="Titulo"
        required
        minlength="2"
        maxlength="30"
      />
      <span class="card-title-input-error form__input-error"></span>
      <input
        class="form__input form__input_type_about"
        id="card-url-input"
        type="url"
        placeholder="Enlace del lugar"
        required
      />
      <span class="card-url-input-error form__input-error"></span>
      <button class="button button_type_submit form__button" type="submit">
        Crear
      </button>
    </form>
  );
}

export default NewCard;
