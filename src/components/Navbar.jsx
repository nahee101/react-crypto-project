import React, { useEffect, useState } from "react";
import { Button, Typography, Avatar } from 'antd';
import Menu, { MenuProps } from 'antd/lib/menu';
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/cryptocurrency.png'

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const menuItems = [
        { label: <Link to="/">Home</Link>, icon: <HomeOutlined />, key: 'Home' },
        { label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>, icon: <FundOutlined />, key: 'Cryptocurrencies' },
        { label: <Link to="/exchanges">Exchanges</Link>, icon: <MoneyCollectOutlined />, key: 'Exchanges' },
        { label: <Link to="/news">News</Link>, icon: <BulbOutlined />, key: 'News' },
    ];

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Cryptoverse</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu theme="dark" items={menuItems} />
            )}
        </div>
    )
};

export default Navbar;