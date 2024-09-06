import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  AreaChartOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

import "./Navbar.css";

import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

const Navbar = () => {
  const menuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link to="home">Home</Link>,
    },
    {
      key: "viewsurveys",
      icon: <UnorderedListOutlined />,
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
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <Link to="../">LogOut</Link>,
    },
  ];
  return (
    <Menu
      theme="light"
      mode="inline"
      className="h-3/4 mt-10 flex flex-col items-center gap-4 text-base"
      items={menuItems} // Usar `items` en lugar de `children`
    />
  );
};

export default Navbar;
