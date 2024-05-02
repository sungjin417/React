import { useState } from "react";

const Members = () => {
  const [name, setName] = useState()
  const onClick = () => {
    console.log(name)
    setName(name)
  }

  return (
   <div>
    <input type="text" value={name} onChange={setName}/>
    <button onClick={onClick} >출력</button>
    <p>이름은 : {name}</p>
   </div>
   
  )
};
export default Members;

