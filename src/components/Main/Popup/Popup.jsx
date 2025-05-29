function Popup(props) {
  const { onClose, title, children } = props;

  function handleEscKeyDown(event) {
    // event.key === "Escape" && onClose;
    console.log(event.key);
  }

  return (
    <div className="popup" onKeyDown={handleEscKeyDown}>
      {" "}
      // ya probé tabIndex y contentEditable{" "}
      <div className="popup__container">
        <button
          className="button button_type_close"
          type="button"
          onClick={onClose}
        >
          <img
            className="button__img button__img_type_close"
            alt="Cerrar"
            src="./../images/Icon_close.png"
          />
        </button>
        {title && <h2 className="form__title">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

export default Popup;
