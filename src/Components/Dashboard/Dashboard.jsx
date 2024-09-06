import { Button, Layout } from "antd";
import { useState } from "react";
import logo from "../../assets/logo.png";
import Navbar from "../Navbar/Navbar";
import "./Dashboard.css";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

import { Content } from "antd/es/layout/layout";

// Import `Outlet` from react-router-dom
import { Outlet } from "react-router-dom";

const { Header, Sider } = Layout;

function Dashboard() {
  const [collaped, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider
        collapsed={collaped}
        collapsible
        trigger={null}
        theme="light"
        className="text-black"
      >
        <div className="flex items-center justify-center w-full pt-5">
          <img className="p-3 h-20 w-20" src={logo} alt="Logo Image" />
        </div>

        <Navbar />

        <a href="/">LogOut</a>
      </Sider>

      <Layout>
        <Header className="bg-gray-200 p-0">
          <Button
            type="text"
            className="toggle"
            onClick={() => setCollapsed(!collaped)}
            icon={collaped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>

        <Content className="flex items-start justify-center bg-gray-200">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
