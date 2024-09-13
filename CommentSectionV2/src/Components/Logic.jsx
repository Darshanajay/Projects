import React from 'react'
import "../App.css";


const Logic = ({handleClick ,type  }) => {
  return (
    <>
    {type === "COMMENT"?(<div className=" cursor-pointer bg-sky-500/100 rounded-lg p-2" onClick={handleClick}>
        {type}
    </div>):(
        <div className="reply" onClick={handleClick}>
        {type}
    </div>
    )}
    
    </>
  )
}

export default Logic