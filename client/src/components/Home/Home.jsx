import React from 'react'
import StoryList from '../StoryList';
import StoryForm from '../StoryForm';
import {Layout} from 'antd';

const{Sider, Content} = Layout;
const Home = () => {
  return (
    <Layout>
        <Sider width={300}>
            <StoryForm/>
        </Sider>
        <Content>
            <StoryList/>
        </Content>

    </Layout>
  )
}

export default Home