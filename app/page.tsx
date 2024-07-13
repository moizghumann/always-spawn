'use client'

import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, SearchOutlined, BellOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Input, Layout, Menu, Dropdown, theme } from 'antd';
import backlog from '/assets/icons/backlog.svg'
import Info from './components/Info';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon)
  }),
);

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">Settings</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={72}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 17, paddingRight: 17 }}>
          <div>Tiger Sports</div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div>
              <Input placeholder="default size" prefix={<SearchOutlined />} />
            </div>
            <BellOutlined />
            <Dropdown overlay={menu} trigger={['click']}>
              <div>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size='large'
                  style={{ cursor: 'pointer' }}
                // size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} 
                />
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              minHeight: 360,
              background: 'grey',
              borderRadius: borderRadiusLG,
            }}
          >
            <Info heading='Backlog' num={288} imageSrc={backlog} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
