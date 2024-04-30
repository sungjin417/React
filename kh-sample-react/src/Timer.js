import React, { useState, useEffect } from "react";

const Timer = () => {
  const [date, setDate] = useState(new Date());

  // 첫 번째 방법: setInterval을 직접 사용
  const intervalID1 = setInterval(() => {
    console.log("첫 번째 방법: setInterval을 직접 사용 - 현재 시간을 업데이트합니다.");
    setDate(new Date())
  }, 1000);

  // 두 번째 방법: useEffect 훅 사용
  useEffect(() => {
    console.log("두 번째 방법: useEffect 훅 사용 - 타이머를 시작합니다.");
    const intervalID2 = setInterval(() => {
      console.log("두 번째 방법: useEffect 훅 사용 - 현재 시간을 업데이트합니다.");
      setDate(new Date());
    }, 1000);
    return () => {
      console.log("두 번째 방법: useEffect 훅 사용 - 컴포넌트가 소멸됩니다. 타이머를 정리합니다.");
      clearInterval(intervalID2);
    };
  }, []);

  return (
    <div>
      <h1>첫 번째 방법</h1>
      <p>1초마다 setInterval로 시간 업데이트: {date.toLocaleTimeString()}</p>
      <h1>두 번째 방법</h1>
      <p>1초마다 useEffect로 시간 업데이트: {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default Timer;