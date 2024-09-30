import React from 'react'

function Child(props) {
  // const {name, roll, College} = props;
  console.log(props.studentDetails);
  const a = "Nani";
  return (
    <div>
      {/* <p>Name : {name}</p> */}
      <p>Name : {props.name}</p>
      <p>Roll : {props.roll}</p>
      <p>College : {props.College}</p>
      {/* <p>Student Details : {props.studentDetails.namme}</p> */}
      <img src={props.image} />
      {/* <button onClick={ () => console.log("Its Clicked"+" "+ a)}>Click Me</button> */}
      <button onClick={props.fun}>Click Me</button>
    </div>

  )
}

export default Child
