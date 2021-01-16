import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import axios from "axios";

const LiveNewsList = ({ contentStyle }) => {
  const [news, setNews] = useState(null);
  const [dotPosition] = React.useState("bottom");
  const apiURL =
    "http://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=72506e8d17b54f0bb0676542c4b3d9a2";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(apiURL);
      setNews(response.data.articles);
    }
    fetchData();
  }, [apiURL]);

  const displayNews = (news, contentStyle) => {
    console.log(news);
    let rows = [];
    for (let i = 0; i < news.length; i++) {
      rows.push(
        <div>
          <article style={contentStyle}>
            <a>{news[i].title}</a>
          </article>
        </div>
      );
    }
    return rows;
  };

  return (
    <>
      {!news ? (
        "Loading..."
      ) : (
        <Carousel dotPosition={dotPosition}>
          {displayNews(news, contentStyle)}
        </Carousel>
      )}
    </>
  );
};

export default LiveNewsList;
