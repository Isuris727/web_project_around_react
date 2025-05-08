function Popup(props) {
  const { title, children } = props;
  return (
    <div className="popup__container">
      <button className="button button_type_close" type="button">
        <img
          className="button__img button__img_type_close"
          alt="Cerrar"
          src="./../images/Icon_close.png"
        />
      </button>
      <h2 className="form__title">{title}</h2>
      {children}
    </div>
  );
}

export default Popup;
