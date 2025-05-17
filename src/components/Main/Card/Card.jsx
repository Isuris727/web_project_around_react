import ImagePopup from "../Popup/ImagePopup";

function Card(props) {
  const { name, link, isLiked, _id } = props.card;
  const { openImagePopup } = props;

  const openImage = { children: <ImagePopup name={name} link={link} /> };
  const cardLikeButtonClassName = `button button_type_like ${
    isLiked ? "button_type_like_active" : "button_type_like_inactive"
  }`;

  return (
    <li className="elements__card card" id={_id}>
      <img
        className="button button_type_delete"
        alt="delete button"
        src="./../images/icon_Trash.svg"
      />
      <img
        className="card__img"
        alt={name}
        src={link}
        onClick={() => {
          openImagePopup(openImage);
        }}
      />
      <p className="card__name">{name}</p>
      <button className={cardLikeButtonClassName} />
    </li>
  );
}

export default Card;
