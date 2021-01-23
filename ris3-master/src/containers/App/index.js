import React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Menu } from 'antd';

import { ThemeProvider } from 'styled-components';

import themes from '../../themes';
import AppHolder from './commonStyle';
import AppRouter from './routes';
import Header from '../Header';

const { Content, Footer, Sider } = Layout;

export default function App() {
  const themeSelector = useSelector(state => state.common.theme);

  return (
    <ThemeProvider theme={themes[themeSelector]}>
      <AppHolder>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider className="sider-block">
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">
                Overview
              </Menu.Item>
              <Menu.Item key="2">
                About
              </Menu.Item>
              <Menu.Item key="3">
                Staking
              </Menu.Item>
              <Menu.Item key="4">
                Governance
              </Menu.Item>
              <Menu.Item key="5">
                Explorer
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header />
            <Content style={{ padding: '0 16px' }}>
              <AppRouter />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </AppHolder>
    </ThemeProvider>
  );
}
