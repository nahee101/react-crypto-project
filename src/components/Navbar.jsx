import React from "react";
import { Button, Typography, Avatar } from 'antd';
import Menu, { MenuProps } from 'antd/lib/menu';
import { Link } from "react-router-dom";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../img/cryptocurrency.png'

const Navbar = () => {
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
            </div>
            <Menu theme="dark" items={menuItems} />
        </div>
    )
};

export default Navbar;