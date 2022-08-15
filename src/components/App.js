import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText, setSearchText ] = useState('')
  function handleSearch(text){
    setSearchText(text)
  }
  

  return (
    <div className="app">
      <Header handleSearch={handleSearch}/>
      <ListingsContainer searchText={searchText}/>
    </div>
  );
}

export default App;
