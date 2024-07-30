//import { useState } from 'react'
import './App.css'
import Options from './components/Options/Options';
import SipCafe  from './components/SipCafe/SipCafe';
//import userData from './data/userData.json'
//import friends from './data/friends.json'
//import transactions from './data/transactions.json'
import Feedback from './components/Feedback/Feedback';
import { useEffect, useState } from 'react';




const App = () => {
  const [count, setCount] = useState(JSON.parse(window.localStorage.getItem('saved-count'))
    ?? {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  )      

  useEffect(() => {
    window.localStorage.setItem('saved-count',JSON.stringify(count))
  },[count])


  const onSupplyAdd = (btnName) => {
    if (btnName === 'reset') {
      return setCount({
        good: 0,
        neutral: 0,
        bad: 0
      })
    }
    setCount({...count, [btnName]:count[btnName] + 1})
  }
  
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);
  const superId = Math.round(Math.random() * 100000000000);

 return (
  <>
   <SipCafe />
     
     <Options onSupplyAdd={onSupplyAdd} />
     {totalFeedback !== 0 ? 
        <Feedback key={superId} good={count.good} neutral={count.neutral} bad={count.bad} positiveFeedback={positiveFeedback}  />
       : <p>No feedback yet</p>
     }
   

  </>
 );
};


export default App
