import React, { useEffect, useState } from 'react'

function AddNote() {
    const [input,setInput]=useState("");
    const[note,setNote]=useState([]);
    const[editnotes,setEditnotes]=useState(null);

    const chnageHandler=(e)=>{
       
        setInput(e.target.value)

    }
useEffect(() => {
  try {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNote(JSON.parse(saved));
    }
  } catch (error) {
    console.error("Failed to load notes from localStorage", error);
  }
}, []);

useEffect(() => {
  try {
    localStorage.setItem("notes", JSON.stringify(note));
  } catch (error) {
    console.error("Failed to save notes to localStorage", error);
  }
}, [note]);

  


const addnoteHander = (e) => {
  e.preventDefault();
  if (editnotes != null) {
    const updatenotes = [...note];
    updatenotes[editnotes] = input;
    setNote(updatenotes);
    setEditnotes(null);
  } else {
    setNote([...note, input]);
  }
  setInput("");
};

    const deletehandler=(index)=>{
        setNote(note.filter((_,i)=>i!=index));
    }
    const updatenote=(index)=>{
        setInput(note[index]);
        setEditnotes(index);
    }
  return (
    <div>
     <input type='text' value={input} onChange={(e)=>chnageHandler(e)} placeholder='enter the notes here'/>
     <button onClick={addnoteHander} >  Submit</button>
    {note.map((data,index)=>(
        <div key={index}>
             {data}{" "}
              <button  onClick={()=>deletehandler(index)}>Delete</button>
              <button onClick={()=>updatenote(index)}>Update</button>
        </div>
      
    
    ))}

    </div>
  )
}

export default AddNote
