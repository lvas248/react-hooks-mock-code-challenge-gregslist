import React, {useState} from "react";

function Search({handleSearch}) {
  
  const [searchText, setSearchText] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log("submit")
    handleSearch(searchText)
    setSearchText("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
