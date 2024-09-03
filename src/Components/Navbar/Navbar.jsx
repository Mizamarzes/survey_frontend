// Iconos Recomendados
// AiFillHome: Para la página de inicio.
// AiFillFileText: Para la sección de encuestas.
// BsFillJournalBookmarkFill: Para los capítulos.
// AiFillQuestionCircle: Para las preguntas.
// AiFillSetting: Para configuraciones.
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  FileTextFilled,
  BookFilled,
  QuestionCircleFilled,
  SettingFilled,
  BarsOutlined,
} from "@ant-design/icons";

const Navbar = ({ darkTheme }) => {
  return (
    <Menu
      theme={darkTheme ? "dark" : "light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="surveys" icon={<FileTextFilled />}>
        <Link to="/surveys">Surveys</Link>
      </Menu.Item>

      <Menu.Item key="chapters" icon={<BookFilled />}>
        <Link to="/chapters">Chapters</Link>
      </Menu.Item>

      <Menu.Item key="questions" icon={<QuestionCircleFilled />}>
        <Link to="/questions">Questions</Link>
      </Menu.Item>

      <Menu.Item key="settings" icon={<SettingFilled />}>
        Account Settings
      </Menu.Item>

      {/* <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Tasks">
        <Menu.Item key="task-1">Task 1</Menu.Item>
        <Menu.Item key="task-2">Task 2</Menu.Item>
        <Menu.Item key="task-3">Task 3</Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  );
};

export default Navbar;
