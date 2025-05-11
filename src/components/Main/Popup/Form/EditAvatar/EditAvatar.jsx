function EditAvatar() {
  return (
    <form
      className="profile__form profile__form_edit_avatar popup__form form"
      name="editAvatarForm"
    >
      <h2 className="form__title">Cambiar foto de perfil</h2>
      <input
        className="form__input form__input_type_name"
        id="profile-image-input"
        type="url"
        placeholder="Enlace de la nueva imagen"
        required
      />
      <span className="profile-image-input-error form__input-error"></span>
      <button className="button button_type_submit form__button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default EditAvatar;
