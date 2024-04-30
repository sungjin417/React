import {useEffect, useState} from "react";
const Clock = () => {
  const[date, setDate] = useState(new Date());

  useEffect(()=> {
    const intervalID = setInterval(()=>setDate(new Date()), 1000); // 1초마다 계속 불러 줌
    return ()=> clearInterval()
  }, []);
  // 정해진 간격에 맞춰 콜백 함수를 호충
  // const tick = () => {
  //   setDate(new Date());
  // }
 
  return (
    <>
    <h1>현재 시간을 표시합니다.</h1>
    <h2>현재시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};
export default Clock;