import { createContext, useState } from "react";
// createContext 함수를 사용해 UserContext라는 새로운 Context객체를 생성
export const UserContext = createContext(null);

const UserStore = porps => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  return(
    <UserContext.Provider value={{
      userId,setUserId,password,setPassword
    }}>
      {porps.children}
    </UserContext.Provider>
  );
};
export default UserStore;