import React from "react";
import LiveNewsList from "./livenewslist";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const LiveNews = () => {
  return (
    <>
      <LiveNewsList contentStyle={contentStyle} />
    </>
  );
};

export default LiveNews;
