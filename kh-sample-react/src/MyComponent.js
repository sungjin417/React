// const MyComponent = ({name, age, children}) => { // 구조분해1
const MyComponent = (props) => {
  // 구조분해2
  const { name, age, children } = props;
  return (
    <>
      <p>안녕하세요, 제 이름은 {name} 입니다.</p>
      <p>나이는 {age}입니다.</p>
      <p>그룹 이름은 {children}</p>
    </>
  );
};
MyComponent.defaultProps = {
  name: "이름이 없습니다.",
  age: 0,
};
export default MyComponent;
