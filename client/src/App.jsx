import React from 'react'
import {Layout, Image, Typography} from 'antd';
import Logo from './images/Logo.png';
import Home from './components/Home';
import styles from './styles';

const {Title} = Typography;
const{Header, Footer} = Layout;

const App = () => {
  return (
    
    <Layout  style = {styles.layout}>
      <Header style = {styles.header}>
        <Image width="45" preview="false" src={Logo} style = {styles.image}/>
        &nbsp;
        <Title style = {styles.title}>TripStory</Title>
      </Header>
      <Home />
      <Footer
        style={styles.footer}
      >
        TripStory©2023 Created by Pranto
      </Footer>
    </Layout>

  )
}

export default App


