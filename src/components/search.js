import { useState, redirect } from "react";
import { useNavigate } from "react-router";
import "./searchbar.style.css"

// search bar for all pages
const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        console.log('entered:' + search);
        navigate("/searchResult/" + search, { replace: true });
      }
    };
  
    const change = (event) => {
      setSearch(event.target.value);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={change}
          onKeyDown={handleKeyPress}
        />
        <button
          className={search.trim() ? "filled" : "empty"}
          onClick={() => navigate("/searchResult/" + search, { replace: true })}
        >
          Search
        </button>
      </div>
    );
  };

export default SearchBar;