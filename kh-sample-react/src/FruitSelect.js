import { useState } from "react"

const FruitSelect = () => {
  const [value, setValue] = useState("grape");

  const handleChange = e => {
    setValue(e.target.value);
  }
  const handelSubmit = e => {
    alert("선택한 과일: " + value);
    e.preventDefault(); // 창이 새로고침 되는 것을 막음
  }
  return (
    <form onSubmit={handelSubmit}>
      <label>
        과일을 선택하세요
        <select value={value} onChange={handleChange}>
          <option value="apple">사과</option>
          <option value="banana">바나나</option>
          <option value="grape">포도</option>
          <option value="kiwi">키위</option>

        </select>
      </label>
      <button type="submit"></button>
    </form>
  );
};
export default FruitSelect;