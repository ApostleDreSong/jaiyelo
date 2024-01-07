"use client"
import React from 'react';
import { Layout } from 'antd';

const { Header: AntdHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntdHeader style={{ background: '#fff', padding: 0 }}>
      {/* Your header content goes here */}
    </AntdHeader>
  );
};

export default Header;
