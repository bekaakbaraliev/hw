import React from 'react';
import "./Render.css"
function Render(props) {
  // console.log(props.list)
  let list = props.list.map((el) => {
    return <p className="List" key={Math.random().toString()}>{el.comment} -
    {el.date.getFullYear().toString()} 
    .{el.date.getMonth().toString()}
    .{el.date.getDay().toString()}
    - time:{el.date.getHours().toString()}h
    and {el.date.getMinutes().toString()}min
    </p>
  })
  return <div>{list}</div>
}

export default Render;