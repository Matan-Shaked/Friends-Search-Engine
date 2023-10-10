import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleInputSubmit = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    onSubmit(inputValue);
  };

  return (
    <div>
      <div>
        <form>
          <div className="label-container">
            <label className="label">Search your friends</label>
          </div>
          <div className="input-container">
            <input
              value={input}
              onChange={handleInputSubmit}
              className="input"
              placeholder="type here"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default SearchBar;
