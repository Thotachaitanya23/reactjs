import React, { useState } from 'react'

export default function Alert(props) {
 const btnClicked=()=>{
  setbutton(`${props.title}`);
 }

    const [button,setbutton]=useState('button was clicked')
  return (
    <> <div>Alert</div> 
    <button onClick={btnClicked}>{button}</button>
    </>
   
  )
}
