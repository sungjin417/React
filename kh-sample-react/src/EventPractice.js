import { useState } from "react"

const EventPractice = () => {
  const [message, setMessage] = useState("안녕하세요");
  // const changeMsg = (e) => {
  //   setMessage(e.target.value);
  // }; // 여기 코드대신 아래의 onChange로 써도 가능
  const [userName, setUserName] = useState("");
  const onChangeUserName = e => setUserName(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUserName("");
    setMessage("");
  };
  const onKeyPress = e => {
    if(e.key === "Enter") onClick();
  };
  return (
    <>
    <h1>이벤트 연습</h1>
    {/* <input type="text" 
    placeholder="아무거나 입력" 
    // onChange={changeMsg}
    onChange={(e)=> setMessage(e.target.value)}
    value={message} />
    <h2>입력 받은 메세지 : {message}</h2>
    <input type="text" /> */}
    <input type="text" value={userName} onChange={onChangeUserName} />
    <input type="text" value={message} onChange={onChangeMessage} onKeyDown={onKeyPress}/>
    <button onClick={onClick}>확인</button>
    </>
  );
};
export default EventPractice;