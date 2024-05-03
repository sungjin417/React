// useMemo : 컴포넌트의 성능을 최적하기 위해 사용
// Memo는 "memoized"를 의미하며, 이전에 계산 한 값을 재사용한다는 의미

import { useCallback, useMemo, useState } from "react"
const getAverage = numbers => {
  if(numbers.length === 0) return 0; // 방어코드 : 잘못된 값이 돌지 않게 하기위해
  console.log("평균값 계산 중");
  const sum = numbers.reduce((a,b) => a + b);
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = e => setNumber(e.target.value);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  }, [number, list]);
  const avg = useMemo(() => getAverage(list), [list]);

  return(
    <>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <p><b>평균값 : </b>{avg}</p>
    </>
  )
}
export default Average;