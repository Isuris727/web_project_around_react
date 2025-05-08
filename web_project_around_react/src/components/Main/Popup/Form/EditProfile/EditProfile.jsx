function EditProfile() {
  return (
    <form class="profile__form popup__form form" name="profileForm">
      <h2 class="form__title">Editar perfil</h2>
      <input
        class="form__input form__input_type_name"
        id="profile-name-input"
        type="text"
        placeholder="Nombre"
        value=""
        required
        minlength="2"
        maxlength="40"
      />
      <span class="profile-name-input-error form__input-error"></span>
      <input
        class="form__input form__input_type_about"
        id="profile-about-input"
        type="text"
        placeholder="Acerca de mí"
        value=""
        required
        minlength="2"
        maxlength="200"
      />
      <span class="profile-about-input-error form__input-error"></span>
      <button class="button button_type_submit form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditProfile;
