import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { searchText }) {
  useEffect(()=>{
      fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(data => setListings(data))
    },[])

  const [ listings, setListings ] = useState([])

  //Delete listing
  function updateListings(id){
    setListings(listings.filter(listing => {
      return listing.id !== id
    }))
  }

  //Filter Search Listings based on user text
const listingsUpdate = listings.filter( listing => listing.description.toLowerCase().includes(searchText.toLowerCase()))



  const listOfListings = listingsUpdate.map(listing =>{
    return <ListingCard key={listing.id} id={listing.id} image={listing.image} description={listing.description} location={listing.location} updateListings={updateListings}/>
  })

  return (
    <main>
      <ul className="cards">
        {listOfListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
