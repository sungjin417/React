import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({category}) => {
  const[articles, setArticles] = useState("");
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        try {
          const query = category === 'all' ? 'all' : `category=${category}`;
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=f01e1079b9504cdbba69a98986ea5e4a`,
            );
            console.log(response)
            setArticles(response.data.articles);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };
    fetchData();
}, [category]);
if(loading) {
  return <NewsListBlock>대기 중...</NewsListBlock>
}
  return (
    <NewsListBlock>
      {articles && articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};
export default NewsList;
