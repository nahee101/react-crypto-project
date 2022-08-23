import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, CryptoCurrencies, CryptoDetails, News } from './components';

function App() {
  return (
    <div className="app">

      <div className='navbar'>
        <Navbar />
      </div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:uuid" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>

      <div className='footer'>
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
          Cryptoverse <br />
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>

  );
}

export default App;
