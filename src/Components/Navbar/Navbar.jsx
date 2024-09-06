import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

import "./Navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="home">Home</Link>,
    },
    {
      key: "viewsurveys",
      icon: <HomeOutlined />,
      label: <Link to="view-survey">View Survey</Link>,
    },
    {
      key: "createsurvey",
      icon: <AppstoreOutlined />,
      label: <Link to="create-survey">Create Survey</Link>,
    },
    {
      key: "updatesurvey",
      icon: <AreaChartOutlined />,
      label: <Link to="update-survey">Update Survey</Link>,
    },
  ];
  return (
    <Menu
      theme="light"
      mode="inline"
      className="menu-bar"
      items={menuItems} // Usar `items` en lugar de `children`
    />
  );
};

export default Navbar;
