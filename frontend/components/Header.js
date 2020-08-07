import React from 'react';
import Link from 'next/link';

import { Row, Col, Menu } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  SmileOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import '../styles/components/header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header_main">
        <div className="header_left">
          <Link href="/">
            <a className="header-logo">Chenxii</a>
          </Link>
          <span className="header-txt">Bug creator</span>
        </div>
        <div className="header_right">
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link href="/">
                <a>
                  <HomeOutlined />
                  Home
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="article">
              <Link href="/">
                <a>
                  <BookOutlined />
                  Article
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="life">
              <Link href="/">
                <a>
                  <SmileOutlined />
                  About
                </a>
              </Link>
            </Menu.Item>
            <Menu.Item key="github">
              <a href="https://github.com/ChenxiiCheng" target="_blank">
                <GithubOutlined />
                GitHub
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
