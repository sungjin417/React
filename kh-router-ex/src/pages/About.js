import { Navigate, useLocation } from "react-router-dom";
// 쿼리스트링은 URL 파라미터 와 달리 별도 설정이 필요 없음
const About = () => {
  const location = useLocation();
  
  const id = localStorage.getItem("ID");
  if(id !== "jks20204") {
    return <Navigate to="/login" replace={true}/>
  }

  return (
    <>
      <h1>여기는 소개 입니다.</h1>
      <p>리액트 라우트를 사용해 봅시다.</p>
      <p>쿼리스트링 : {location.search}</p>
    </>
  );
};
export default About;