import React from 'react'
import {Row} from 'antd';
import Story from '../Story';
// import styles from './styles';
const StoryList = () => {
  return (
    <Row  gutter={[48,32]}>
      <Story/>
      <Story/>
    </Row>

 
  )
}

export default StoryList