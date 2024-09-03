import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
    PayCircleOutlined,
    SettingOutlined,
    BarsOutlined
} from '@ant-design/icons';

const Navbar = ({ darkTheme }) => {
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: 'Home'
        },
        {
            key: 'activity',
            icon: <AppstoreOutlined />,
            label: 'Activity'
        },
        {
            key: 'subtasks',
            icon: <BarsOutlined />,
            title: 'Tasks'
        },
        {
            key: 'progress',
            icon: <AreaChartOutlined />,
            label: 'Progress'
        },
        {
            key: 'survey',
            icon: <PayCircleOutlined />,
            label: 'Survey'
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings'
        }
    ];
    return (
        <Menu 
        theme={darkTheme ? 'dark' : 'light'} 
        mode='inline' 
        className='menu-bar'
        items={menuItems} // Usar `items` en lugar de `children`
        />
    )
}

export default Navbar;
