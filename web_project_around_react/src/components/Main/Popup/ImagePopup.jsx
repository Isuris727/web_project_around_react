function ImagePopup(props) {
  const { name, link } = props;

  return (
    <>
      <img className="popup__img" alt={name} src={link} />
      <p className="popup__card-name">{name}</p>
    </>
  );
}

export default ImagePopup;
