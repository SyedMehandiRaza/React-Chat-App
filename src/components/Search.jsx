import React from 'react'
import Add  from "../img/Mehandi-dp.jpeg"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
      <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img src={Add} alt="dp" />
        <div className="userChatInfo">
          <span>Hussain</span>
        </div>
      </div>
    </div>
  )
}

export default Search
