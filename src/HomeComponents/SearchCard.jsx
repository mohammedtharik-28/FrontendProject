import React from 'react'

function SearchCard({ close }) {
  return (
    < div className="searchCard-content d-flex ">
    <i className="bi bi-search"></i> 
      <input  type="text" placeholder="Type your Search" />
      <i className="bi bi-x-lg" onClick={close}></i> 
    </div>
  );
}



export default SearchCard