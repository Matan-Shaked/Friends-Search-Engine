function AvatarShow({ name, image }) {
  return (
    <div className="avatar">
      <img className="picture" src={image.large} alt="image of the avatar" />
      <div className="name-container">
        <div className="name">{`${name.title} ${name.first} ${name.last}`}</div>
      </div>
    </div>
  );
}
export default AvatarShow;
