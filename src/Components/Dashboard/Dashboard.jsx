import React, { useState } from "react";
import { Layout, Button, theme } from "antd";
import Logo from './lib/Logo';
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import ToggleThemeButton from "./lib/ToggleThemeButton";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Header, Sider } = Layout;
function Dashboard() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collaped, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        collapsed={collaped}
        collapsible
        trigger={null}
        theme={darkTheme ? "dark" : "light"}
        className="sidebar"
      >
        <Logo />
        <Navbar darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collaped)}
            icon={collaped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
          <a href="/">LogOut</a>
        </Header>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
