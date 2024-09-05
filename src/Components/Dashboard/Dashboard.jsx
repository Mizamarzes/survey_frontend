import { useState, useRef, useEffect } from "react";
import { Layout, Button, theme } from "antd";
import Logo from "./lib/Logo";
import Navbar from "../Navbar/Navbar";
import ToggleThemeButton from "./lib/ToggleThemeButton";
import "./Dashboard.css";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { Content } from "antd/es/layout/layout";

// Import `Outlet` from react-router-dom
import { Outlet } from "react-router-dom";

// Api SurveyService.js
import { getAllSurveys } from "../../services/SurveyService";
import { toastError } from "../../services/ToastService/ToastService";

const { Header, Sider } = Layout;
function Dashboard() {
  // surveys

  const [darkTheme, setDarkTheme] = useState(true);
  const [collaped, setCollapsed] = useState(false);

  const modalRef = useRef();
  const fileRef = useRef();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

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
        <a href="/">LogOut</a>
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
        </Header>

        <Content className="flex items-start justify-center bg-gray-200">
          {/* <div className="bg-white shadow-md rounded-lg p-8 flex flex-col lg:flex-row"> */}
            <Outlet />
          {/* </div> */}
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
