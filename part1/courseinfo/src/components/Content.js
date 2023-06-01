import React from 'react'
import Part from './Part'

function Content(props) {
    console.log('name',props.content.parts[0].name);
  return (
    <div>
      {/* <p>{props.content[0][0] +' '+ props.content[0][1]}</p>
      <p>{props.content[1][0] +' '+ props.content[1][1]}</p>
      <p>{props.content[2][0] +' '+ props.content[2][1]}</p> */}
      <Part part={props.content.parts[0].name} exercise={props.content.parts[0].exercises}/>
      <Part part={props.content.parts[1].name} exercise={props.content.parts[1].exercises}/>
      <Part part={props.content.parts[2].name} exercise={props.content.parts[2].exercises}/>
    </div>
  )
}

export default Content
