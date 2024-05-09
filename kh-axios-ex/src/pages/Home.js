import { UserContext } from "../context/UserStore";
import { useContext } from "react";
const Home = () => {
  const context = useContext(UserContext);
  const {userId, password} = context;

  return(
    <>
      <p>여기는 Home 화면 입니다.</p>
      <p>로그인 아이디 : {userId}</p>
      <p>패스워드 : {password}</p>
    </>
  );
};

export default Home