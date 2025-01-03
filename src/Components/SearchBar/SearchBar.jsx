import React from "react";
import Image from "next/image";
import Search from "../../../public/Search.png";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <button className="sortButton">
        <Image src="/vector.png" alt="Sort" width={16} height={16} />
        Sırala
      </button>

      <input
        type="text"
        placeholder="Ex. Doctor, Hospital"
        className="searchInput"
      />

      <button className="searchButton">
        <Image src={Search} alt="Search" width={16} height={16} />
        Axtarış
      </button>
    </div>
  );
};

export default SearchBar;
