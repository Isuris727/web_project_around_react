function Card(props) {
  const { name, link, isLiked, _id } = props.card;

  return (
    <li className="elements__card card" id={_id}>
      <img
        className="button button_type_delete"
        alt="delete button"
        src="./../images/icon_Trash.svg"
      />
      <img className="card__img" alt={name} src={link} />
      <p className="card__name">{name}</p>
      <button className="button button_type_like button_type_like_inactive" />
    </li>
  );
}

export default Card;
