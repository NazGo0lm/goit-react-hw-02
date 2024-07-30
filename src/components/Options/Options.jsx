//import React from 'react'

//import FriendListItem from "../FriendListItem/FriendListItem"



const Options = ({onSupplyAdd}) => {
  return (
    
    <div className="">
      <button type="button" onClick={()=> onSupplyAdd('good')}>Good</button>
      <button type="button" onClick={()=> onSupplyAdd('neutral')}>Neutral</button>
      <button type="button" onClick={()=> onSupplyAdd('bad')}>Bad</button>
      <button type="button" onClick={()=> onSupplyAdd('reset')}>Reset</button>
    </div>

   
  )
}

export default Options
