import React ,{useState} from 'react';
import '../App.less';
import { Layout, Table, Tag, Space, Menu, Breadcrumb } from 'antd';
import   {UserOutlined , LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Navbar from '../routes/Navbar'
import SubMenu from 'antd/lib/menu/SubMenu';
import Text from 'antd/lib/typography/Text';
import {data} from '../data'

const { Column, ColumnGroup } = Table;

const { Header, Footer, Sider, Content} = Layout;

const Layouts =()=> {
    // state = {
    //   collapsed: false,
    // };
    const [collapsed, setCollapsed] = useState(false)
    //const [auth, setAuth] = useState(false)
    
    const toggle = () => {
        setCollapsed({
        collapsed: !collapsed,
      });
    };
  
 // render() {
      return (
        <Layout>
      <Header className="header" >
        
       
         <Navbar/> 
       
      </Header>
      <Layout>
        <Sider trigger={toggle} collapsible collapsed={collapsed} width={200} className="sider">
          <Menu className="menu"
            
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu className="menu"  key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.ItemGroup className="menu-items" key="mig1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu className="menu-items" key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.ItemGroup className="menu" key="mig2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu className="menu-items" key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.ItemGroup className="menu" key="mig3">
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        
        <Layout >
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>Layouts</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="content">
            <Table dataSource={data}>
                        <ColumnGroup className="tableColumn" >
                          <Column title="First Name" dataIndex="firstName" key="firstName" />
                          <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        </ColumnGroup >
                        <Column title="Age" dataIndex="age" key="age" />
                        <Column title="Address" dataIndex="address" key="address" />
                        <Column
                          title="Tags"
                          dataIndex="tags"
                          key="tags"
                          render={tags => (
                            <>
                              {tags.map(tag => (
                                <Tag color="blue" key={tag}>
                                  {tag}
                                </Tag>
                              ))}
                            </>
                          )}
                        />
                        <Column
                          title="Action"
                          key="action"
                          render={(text, record) => (
                            <Space size="middle">
                              {/* <a href="#">Invite {record.lastName}</a>
                              <a href="#">Delete</a> */}
                            </Space>
                          )}
                        />
              </Table>
          </Content>
        </Layout>
        
      </Layout>
      <Footer className="footer">
        <Text>Copyright Reserved</Text>
      </Footer>
    </Layout>
      );
   
  }
  export default Layouts