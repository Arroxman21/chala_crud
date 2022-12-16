import React from 'react'

export default function Malumot(props) {

    console.log(props);
  return (
    <div>

        <p>{props.value ? "keldi" : "kemadi"}</p>
        

        
    </div>
  )
}
