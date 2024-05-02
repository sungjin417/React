// UseRef : DOM 요소를 직접 선택해야 하는 경우 사용(요소의 크기, 스크롤바 위치, 포커스 이동)

import { useRef } from "react";

const CreateRef = () => {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.disabled = false; // current : 값을 유지하기 위해 대입
    inputRef.current.focus();
  }
  return (
    <>
      <input disabled type="text" ref={inputRef} />
      <button onClick={handleFocus}>활성화</button>
    </>
  )
}
export default CreateRef;