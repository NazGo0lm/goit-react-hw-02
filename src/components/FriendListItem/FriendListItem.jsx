//import React from 'react'
import friendListItemCSS from './FriendListItem.module.css'
import clsx from "clsx";

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
      <p 
      className={clsx(friendListItemCSS.normal, {
          [friendListItemCSS.friendListItemGreen]: isOnline === true,
          [friendListItemCSS.friendListItemRed]: isOnline === false,
      })}
      
      >
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>

  )
}

export default FriendListItem
