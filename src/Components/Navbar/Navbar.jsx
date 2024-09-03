import { Menu } from 'antd';
import {
    HomeOutlined,
    AppstoreOutlined,
    AreaChartOutlined,
} from '@ant-design/icons';

import { Link } from 'react-router-dom';

const Navbar = ({ darkTheme }) => {
    const menuItems = [
        {
            key: 'home',
            icon: <HomeOutlined />,
            label: <Link to="">Home</Link>
            
        },
        {
            key: 'createsurvey',
            icon: <AppstoreOutlined />,
            label: <Link to="create-survey">Create Survey</Link>
        },
        {
            key: 'updatesurvey',
            icon: <AreaChartOutlined />,
            label: <Link to="update-survey">Update Survey</Link>
        },
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
