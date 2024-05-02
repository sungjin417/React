// 리액트에서의 배열과 맵 : 렌더링에 매우 중요한 역할을 함

const User = (props) => {
  return(
    <div>
      <b>{props.user.userName}</b> 
      <span>{props.user.email}</span>
    </div>
  )
};

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmail.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];
  return (
    <>
      <div>
        {/* <b>{users[0].userName}</b> <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].userName}</b> <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].userName}</b> <span>{users[2].email}</span> */}
        <User user={users[0]}/>
        <User user={users[1]}/>
        <User user={users[2]}/>
      </div>
    </>
  );
};
export default UserList;