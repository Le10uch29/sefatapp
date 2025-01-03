"use client";
import { useState } from "react";
import SearchIcon from "@/assets/svg/SearchIcon";
import style from "./_Header.module.scss";
import { searchAPI } from "@/api/searchAPI";

const Search = () => {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchClick = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      setIsLoading(true);
      try {
        const data = await searchAPI(query);

        const results = [
          ...(data[0]?.Clinics || []).map((clinic) => clinic.name),
          ...(data[1]?.Doctors || []).map((doctor) => doctor.name),
          ...(data[2]?.Medicines || []).map((medicine) => medicine.name),
          ...(data[3]?.Pharmacies || []).map((pharmacy) => pharmacy.name),
        ];

        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className={`${style.search} ${style.items}`}>
      <div className={style.searchContainer}>
        <button
          onClick={handleSearchClick}
          className={`${style.searchButton} ${isSearchOpen ? "active" : ""}`}
        >
          <SearchIcon />
        </button>
        <input
          type="text"
          className={`${style.searchInput} ${isSearchOpen ? style.open : ""}`}
          placeholder="Axtarış..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyUp={(e) => e.key === "Enter" && handleInputChange(e)}
        />
      </div>
      {isSearchOpen && searchQuery && searchResults.length > 0 && (
        <div className={style.searchResults}>
          {isLoading ? (
            <div className={style.loader}>Loading...</div>
          ) : (
            <ul>
              {searchResults.map((result, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={style.resultLink}
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchQuery(result);
                      setSearchResults([]);
                    }}
                  >
                    {result}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;

