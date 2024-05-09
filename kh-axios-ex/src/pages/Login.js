import { UserContext } from "../context/UserStore";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () =>{
  const context = useContext(UserContext);
  const {setUserId, setPassword} = context;
  const navigate = useNavigate();
  const onClick = () => {
    setUserId("곰돌이사육사");
    setPassword("sphb8250");
    navigate("/home");
  };

  return(
    <>
       <p>여기는 로그인 페이지 입니다.</p>
       <button onClick={onClick}>로그인 버튼</button>
    </>
  );
};

export default Login;