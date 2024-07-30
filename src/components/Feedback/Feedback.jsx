//import React from 'react'

//import { useState } from "react"

const Feedback = ( {good,neutral,bad,positiveFeedback} ) => {
  


  return (
    
    <div >
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        
      { positiveFeedback ?
        <p>Total: {positiveFeedback}%</p> : ''}
      
    </div>
  )
}

export default Feedback
