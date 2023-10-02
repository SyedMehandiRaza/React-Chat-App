import React from 'react'
import Add from "../img/add-user.png"
import Cam from "../img/video-camera.png"
import More from "../img/more.png"
import Messages from './Messages'
import Input from "./Input"

const Chat = () => {

  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Hussain</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More}alt="" />
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat
