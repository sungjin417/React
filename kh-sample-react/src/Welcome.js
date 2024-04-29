// const Welcome = (props) => {
//   return <h1>안녕하세요!!! 제 이름은 {props.name}, 나이는 {props.age}</h1>
// }; // 예약어가 아니기 때문에 이름 바꿔도 됨(관례상 props라고 쓴다)
// export default Welcome;
// // props : 속성들의 모임(하나의 덩어리)

const Welcome = (props) => {
  return (
    <>
      <h2>제이름은 {props.name}이고,</h2>
      <h2>나이는 {props.age}이고,</h2>
      <h2>주소는 {props.addr} 입니다</h2>
    </>
  )
}
export default Welcome;
