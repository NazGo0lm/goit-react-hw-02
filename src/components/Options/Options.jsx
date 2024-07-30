//import React from 'react'

//import FriendListItem from "../FriendListItem/FriendListItem"



const Options = ({updateFeedback,totalFeedback,deleteFeedback}) => {
  return (
    
    <div className="">
      <button type="button" onClick={()=> updateFeedback('good')}>Good</button>
      <button type="button" onClick={()=> updateFeedback('neutral')}>Neutral</button>
      <button type="button" onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback !== 0 &&
        <button type="button" onClick={()=> deleteFeedback()}>Reset</button>}
      
    </div>

   
  )
}

export default Options
