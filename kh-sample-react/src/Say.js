import React, {useState} from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // 상태관리
  const onClickEnter = () => setMessage("안녕하세요!!");
  const onClickLeave = () => setMessage("안녕히 가세요!!");
  const[val, setColor] = useState("black"); // 상태관리

  // let msgStr = "안녕하세요.";
  // msgStr = "안녕히 가세요"; // 이렇게 사용하면 변한 값이 화면에 출력이 안됨
  // {} : 안에는 객체를 넣는다. {{}} : 안에 속성값
  return (
    <>
    <button onClick={onClickEnter}>입장</button>
    <button onClick={onClickLeave}>퇴장</button>
    <h1 style={{color: val}}>{message}</h1> 
    <button style={{color:"red"}} onClick={()=>setColor("red")}>빨간색</button>
    <button style={{color:"green"}} onClick={()=>setColor("green")}>초록색</button>
    <button style={{color:"blue"}} onClick={()=>setColor("blue")}>파란색</button>
    </>
  );
};
export default Say;