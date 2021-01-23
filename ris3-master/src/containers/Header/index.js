import React from 'react';
import { Layout } from 'antd';

const { Header: LayoutHeader } = Layout;

export default function Header() {
  return (
    <LayoutHeader>
      <h1 style={{ color: 'white' }}>CUSTOM HEADER</h1>
    </LayoutHeader>
  );
}
