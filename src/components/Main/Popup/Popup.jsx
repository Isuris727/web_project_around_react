import { useEffect } from "react";

function Popup(props) {
  const { onClose, title, children } = props;

  // useEffect(() => {
  function handleEscKeyDown(event) {
    // event.key === "Escape" && onClose;
    console.log(event.key);
  }
  //   handleEscKeyDown(event);
  // }, []);

  // ya probé tabIndex y contentEditable en los atributos de la etiqueta

  return (
    <div className="popup">
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
