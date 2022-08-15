import React from "react";


function ListingCard({ id, location, description, image, updateListings }) {
function handleClick(e){
  if(e.target.className === "emoji-button favorite active"){
    e.target.className = "emoji-button favorite"
    e.target.textContent = '☆'
  }else{
    e.target.className = "emoji-button favorite active"
    e.target.textContent = '★'
  }
}

function handleDelete(){
  fetch(`http://localhost:6001/listings/${id}`,{
    method:"DELETE"
  })
  .then( updateListings(id))
}


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
