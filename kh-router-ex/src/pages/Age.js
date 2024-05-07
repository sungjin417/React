import { Link, useNavigate, useParams } from "react-router-dom";

const Age = () => {
  const {age} = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>전달 받은 나이는 {age} 입니다.</h1>
      <Link to="/about">소개</Link>
      <p onClick={()=>navigate(-1)}>소개페이지로 이동</p> 
      {/* navigate(-1) : 전페이지로 이동, navigate("/about") : about으로 이동 */}
      
    </>
  );
};
export default Age;