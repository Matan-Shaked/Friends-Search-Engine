import { useEffect, useState } from "react";
import ShowAvatars from "./api";
import AvatarList from "./components/AvatarList";
import SearchBar from "./components/SearchBar";
function App() {
  const [avatars, setAvatars] = useState([]);
  const [filteredAvatars, setFilteredAvatars] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const handleAvatars = async () => {
      const resultOfAvatars = await ShowAvatars();
      setAvatars(resultOfAvatars.data.results);
      setFilteredAvatars(resultOfAvatars.data.results);
    };
    handleAvatars();
  }, []);

  const handleChange = (term) => {
    setInput(term);
    filterAvatarsByletters(avatars, term);
  };

  function filterAvatarsByletters(data, name) {
    const fliteredData = data.filter((avatar) => {
      const fullName = `${avatar.name.first}${avatar.name.last}`.toLowerCase();
      const searchTerm = name.toLowerCase();

      return fullName.includes(searchTerm);
    });
    setFilteredAvatars(fliteredData);
  }

  return (
    <div className="app">
      <div>
        <div className="searchBar">
          <SearchBar onSubmit={handleChange} />
        </div>
        <div>
          <AvatarList avatars={filteredAvatars} />
        </div>
      </div>
    </div>
  );
}
export default App;
