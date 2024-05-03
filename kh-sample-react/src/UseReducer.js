import { useReducer } from "react"
const reducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return{value: state.value + 1};
      case "DECREMENT":
        return{value: state.value -1};
        default:
          return state;
  }
}
const ReducerCtn = () => {
  const [state, dispatch] = useReducer(reducer, {value:0}) // (함수,초기값)
  return (
    <>
    <p>현재 카운터 값은 <b>{state.value}</b>입니다.
    </p>
    <button onClick={()=>dispatch({type:"INCREMENT"})}>증가</button>
    <button onClick={()=>dispatch({type:"DECREMENT"})}>감소</button>
    </>
  )
}
export default ReducerCtn;