import React from 'react'
import { useState, useEffect } from 'react'
function TypingChallenge() {
   const[wordcount,setWordcount]=useState(0);
  const[time,setTime]=useState(0);
  const[isActive,setIsActive]=useState(false);
  const[text,setText]=useState("");

 useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isActive) {
      finishGame();
    }

    return () => clearInterval(timer);
  }, [isActive, time]);
  function finishGame() {
    setIsActive(false);
    const words = text.trim().split(" ").filter(word => word !== "").length;
    setWordcount(words);
    setText("");
  }
  return (
    <div>
      <h1> Typing challenge component</h1>

    {
     !isActive &&
     <input type='number' value={time} onChange={(e)=>setTime(e.target.value)} />
    }
    {!isActive && time > 0 && (
      <button onClick={() => setIsActive(true)}>Start</button>
    )}
    {
      isActive && time>0 &&<>
        <div>
        <p>Time left: {time} seconds</p>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={finishGame}>Finish</button>
        </div></>
    
    }
    {!isActive && wordcount > 0 && (
        <h3>You typed {wordcount} words!</h3>
      )}
    </div>
  )
}

export default TypingChallenge
