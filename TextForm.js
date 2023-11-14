import React, { useState } from 'react'


export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        console.log("UpperCase word "+text)
        let newText=text.toUpperCase();
        setText(newText)
    }
 
    const handleLowerClick = ()=>{
        console.log("UpperCase word "+text)
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleOnChang = (event)=>{
        setText(event.target.value)
    }
    const reverseText = ()=> {   
        return setText(text.split('').reverse().join(''));
    }
    const [text,setText] = useState("Please enter your Name Here!!!");
  return (
  <>  
<div>
    <h1>{props.title}</h1>
 <div className="mb-3">
   <textarea class="form-control" value={text}  onChange={handleOnChang} id="myBox" rows="10"></textarea>
   <button className='btn btn-primary mx-1' onClick={handleUpClick}>convert to upper case</button>
   <button className='btn btn-primary ' onClick={handleLowerClick}>convert to lower case</button>
   <button className='btn btn-primary mx-1 ' onClick={reverseText}>convert to Reverse case</button>
 </div>
</div>

<h1>Your text Preview is Here:</h1>
<h6>{text}</h6>
<h5>Text length in letters:{text.length} letters</h5>
<h6>Text length in words:{text.split(' ').length} words</h6> 

</>
  )
}
