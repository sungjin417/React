// 리액트에서의 배열과 맵 : 렌더링에 매우 중요한 역할을 함

const User = (props) => {
  return(
    <div>
      <b>{props.user.userName}</b> 
      <span>{props.user.email}</span>
    </div>
  )
};

const Map = () => {
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
      
       {users && users.map(user => <User key={user.id} user={user}/>)}
      {/* users && : 데이터가 있는지 확인 하는 방법 */}
      {/* key={user.id} : 식별값이 있어야 리액트가 렌더링 대상을 식별
      or  {users && users.map((user, index) => <User key={user.index} user={user}/>)}  
      : 인덱스(배열의) 값을 넣어서 사용해도 됨*/}
    </>
  );
};
export default Map;