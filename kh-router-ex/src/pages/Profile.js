import { useParams } from "react-router-dom";
// useParams : 리액트 라우트에서 URL 파리미터 값을 가져오기 위해 사용되는 훅

const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링 부트를 좋아하는 개발자",
  },
  dba: {
    name: "드루이드상디",
    description: "DBA를 꿈꾸는 개발자",
  },
};
const Profile = () => {
  const params = useParams();
  const profile = data[params.username]; // 키를 넣으면 값이 나옴[키]
  return(
    <>
    <h1>사용자 프로필</h1>
    {profile ? (
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
      </div>
    ): ( 
    <p>존재하지 않는 프로필 입니다.</p>
  )}
    </>
  );
};
export default Profile;