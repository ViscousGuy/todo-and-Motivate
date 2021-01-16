import React from "react";
import Layout from "../../components/layout/layout.component";
import Todos from "../../components/todos";
import LiveNews from "../../components/livenews";

const Homepage = () => {
  return (
    <Layout>
      <Todos />
      <LiveNews />
    </Layout>
  );
};

export default Homepage;
