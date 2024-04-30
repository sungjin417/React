import { Fragment } from 'react';
import './App.css';
// JSX란 ? JavaScript에 XML을 추가 확장한 문법
// html 태그 사용 시 반드시 닫힘 태그가 존재해야 함 (<br></br>, <br/>)
// 컴포넌트가 반환 될 때 태그는 한개 이어야 함
// 자바스크립트 코드를 중괄호를 사용해 데이터 바인딩 할 수 있음
// 조건부 연산자 : 중괄호{} 내에서 조건부 연산자 사용 가능
// 조건부 렌더링 : && 연산자의 특징을 활용해서 조건에 따라 화면 렌더링
//  name === "리엑트" && <h1>리액트 입니다.</h1>
// 인라인 스타일링 : 

// function App() {
//   const name = "리엑트";
//   const styleC = {
//     backgroundColor: "#222",
//     color: "royalblue",
//     fontSize: "2em"
//   }
//   return <p style={styleC}>{name === "리엑트" ? <h1>리엑트</h1> : <h2>자바스크립트</h2>}</p>
  
// }

// export default App;

import Greeting from './Greeting';
import Welcome from './Welcome';
import Section from './Section';
import MyComponent from './MyComponent';
import Say from './Say';
import Clock from './Clock';
import Timer from './Timer';
import EventPractice from './EventPractice';
import FruitSelect from './FruitSelect';
import Table from './Table';
// const member = {
//   name: "곰사육사",
//   age: 10,
//   addr: "경기도 수원시"
// };
// function App() {
//   // return <Greeting/>;
//   return(
//     <>
//       {/* 컴포넌트의 재활용 */}
//       <Welcome name="안유진" age={21} addr= "서울시 강남구 역삼동" />
//       <Welcome name="장원영" age={20} addr= "서울시 강남구 청담동" />
//       <Welcome name="레이" age={19} addr= "서울시 강남구 삼성동" />
//       {/* <Welcome name={member.name} age={member.age}/> */}
//     </>
//   );
// };
// export default App;

// 컴포넌트의 합성
// function App() {
  
//   return(
//     <>
//       <Section title="스포츠" content="오늘의 프로야구는 기아가 1등입니다."/>
//       <Section title="정치" content="오늘은 영수 회담이 진행 중 입니다."/>
//       <hr/>
//       <MyComponent name="은채" age={20}/>
//       <MyComponent name="카즈하" />
//       <MyComponent age={33} />
//       <MyComponent><h1>여기는 르세라핌입니다.</h1></MyComponent>
//     </>
//   );
// };
// export default App;
function App() {
  return(
    <>
      <Table/>
    </>
  );
};
export default App;