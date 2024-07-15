'use client'

import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined, SearchOutlined, BellOutlined, AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Input, Layout, Menu, Dropdown, theme, Row, Col, Card, Badge } from 'antd';
import backlog from '/assets/icons/backlog.svg'
import Info from './components/Info';
import DetailsCard from './components/DetailsCard';
import TransactionCard from './components/TransactionCard';
import TeamsCard from './components/TeamsCard';
import SalesForecast from './components/ForecastCard';
import ObjectiveCard from './components/ObjectiveCard';
import AgentCard from './components/AgentCard';

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
          <h3 style={{ fontSize: '1.6em' }}>Tiger Sports</h3>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div>
              <Input placeholder="default size" prefix={<SearchOutlined />} />
            </div>
            <Badge size='small' count={99} overflowCount={10}>
              <BellOutlined style={{ fontSize: '20px' }} />
            </Badge>

            <Dropdown overlay={menu} trigger={['click']}>
              <div style={{ marginBottom: 7 }}>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size='default'
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
              minHeight: '100%',

              borderRadius: borderRadiusLG,
            }}
          >
            <div style={{ width: '100%', paddingLeft: 40 }}>
              <Row gutter={0}>
                {/* Parent Column 1 (40%) */}
                <Col span={10}>
                  <Row >
                    {/* Child Row 1 */}
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                  </Row>
                  <Row >
                    {/* Child Row 2 */}
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                  </Row>
                </Col>

                {/* Parent Column 2 (30%) */}
                <Col span={7}>
                  <DetailsCard heading='Revenues' description='Todays Deposit' cost={288000} agentInfo='Amount' />
                </Col>

                {/* Parent Column 3 (30%) */}
                <Col span={7}>
                  <div style={{ marginLeft: 10 }}>
                    <TransactionCard stats='10 trade' />
                  </div>
                </Col>
              </Row>

              <Row gutter={25}>
                <Col span={14}>
                  <SalesForecast />
                </Col>
                <Col span={10}>
                  <Row >
                    {/* Child Row 1 */}
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                  </Row>
                  <Row >
                    {/* Child Row 2 */}
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                    <Col span={12}>
                      <Info heading="Backlog" num={288} imageSrc={backlog} />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row gutter={140}>
                <Col span={7}>
                  <AgentCard heading='Agent' description='Todays Deposit' cost={89} agentInfo='Amount' />
                </Col>
                <Col span={8} offset={0}>
                  <TeamsCard />
                </Col>
                <Col span={9}>
                  <ObjectiveCard />
                </Col>
              </Row>
            </div>

            {/* <Info heading='Backlog' num={288} imageSrc={backlog} />
            <DetailsCard heading='Revenues' description='Todays Deposit' cost={288000} agentInfo='Amount' />
            <TransactionCard stats='+10 trade' />
            <TeamsCard />
            <SalesForecast />
            <ObjectiveCard /> */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout >
  );
};

export default App;
