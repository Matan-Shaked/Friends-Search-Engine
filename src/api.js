import axios from "axios";

const ShowAvatars = async () => {
  const response = await axios.get("https://randomuser.me/api/?results=10");
  return response;
};

export default ShowAvatars;
