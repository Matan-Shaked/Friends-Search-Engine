import AvatarShow from "./AvatarShow";
import "./compononets.css";

function AvatarList({ avatars }) {
  const renderAvatars = avatars.map((avatar, index) => (
    <AvatarShow key={index} name={avatar.name} image={avatar.picture} />
  ));
  return <div className="list">{renderAvatars}</div>;
}
export default AvatarList;
