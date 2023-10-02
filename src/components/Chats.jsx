import React from 'react'
import Add from '../img/Mehandi-dp.jpeg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Add} alt="dp" />
        <div className="userChatInfo">
          <span>Hussain</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="dp" />
        <div className="userChatInfo">
          <span>Hussain</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Add} alt="dp" />
        <div className="userChatInfo">
          <span>Hussain</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats
