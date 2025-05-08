function EditAvatar() {
  return (
    <form
      class="profile__form profile__form_edit_avatar popup__form form"
      name="editAvatarForm"
    >
      <h2 class="form__title">Cambiar foto de perfil</h2>
      <input
        class="form__input form__input_type_name"
        id="profile-image-input"
        type="url"
        placeholder="Enlace de la nueva imagen"
        required
      />
      <span class="profile-image-input-error form__input-error"></span>
      <button class="button button_type_submit form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
