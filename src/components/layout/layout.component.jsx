import React from "react";
//import Header from "../header/header.component";
import { Layout as Structure, Menu } from "antd";
import "./layout.styles.scss";
import logo from "../../assets/logo.png";
const { Header, Content, Footer } = Structure;

const Layout = ({ children }) => {
  return (
    <>
      <Structure style={{ height: "100vh" }}>
        <Header className="header">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" width="50px" height="30px" />
            </a>
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <a href="/">Todos</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="/motivateme">Motivate Me!</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="/about">About</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Structure
          className="site-layout-background"
          style={{ padding: "24px 0" }}
        >
          <Content style={{ padding: "0 24px", minHeight: 280 }}>
            {children}
          </Content>
        </Structure>
        <Footer style={{ textAlign: "center" }}>
          Powered by Ant Design ©2021 Created by Shubham Anchaliya
        </Footer>
      </Structure>
    </>
  );
};

export default Layout;
