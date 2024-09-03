import { useState, useRef, useEffect } from "react";
import { Layout, Button, theme } from "antd";
import Logo from "./lib/Logo";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";
import ToggleThemeButton from "./lib/ToggleThemeButton";
import SurveyForm from "../Survey/SurveyForm";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { Content } from "antd/es/layout/layout";

import SurveyList from "../Survey/SurveyList";

// Import `Outlet` from react-router-dom
import { Outlet } from "react-router-dom";

// Api SurveyService.js
import { getAllSurveys } from "../../api/SurveyService";
import { toastError } from "../ToastService/ToastService";


const { Header, Sider } = Layout;
function Dashboard() {
  // surveys
  const [surveys, setSurveys] = useState([]);

  const addSurvey = (newSurvey) => {
    setSurveys([...surveys, newSurvey]);
  };

  const [darkTheme, setDarkTheme] = useState(true);
  const [collaped, setCollapsed] = useState(false);

  const modalRef = useRef();
  const fileRef = useRef();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getSurveys = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getAllSurveys(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  }

  useEffect(() => {
    getSurveys();
  }, []);

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

        <Content>
          <div className="dashboard">
            <h1>Surveys Dashboard</h1>
            <Outlet />
          </div>
        </Content>

        <SurveyList data={ data } currentPage={ currentPage } getAllSurveys={getSurveys}/>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
