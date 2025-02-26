import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    <div>
      {showSearch && (
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products..."
        />
      )}
      <button onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? "Close" : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
