import React, { useState } from 'react'

const Input = () => {
    const [comment, setComment] = useState("");
    
  return (
    <>
        
        <div>
            <input type="text" onChange={(e)=>setComment(e.target.value)} />
            <button>Submit</button>
        </div>
    </>
  )
}

export default Input