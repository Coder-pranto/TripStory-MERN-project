import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles';
import { Card, Tooltip, Typography, Image } from 'antd';
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from '@ant-design/icons';
import moment from 'moment';
import { deleteStory,likeStory } from '../../actions/stories';

const { Meta } = Card;
const { Text, Link, Paragraph } = Typography;


const Story = ({ story, setSelectedId }) => {
  const [expand, setExpand] = useState(true);

  const dispatch= useDispatch();
  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={[
        <div style={styles.actions}>
          <Tooltip
            placement='top'
            title='Like'
            color='magenta'
            onClick={() => {dispatch(likeStory(story._id))}}
          >
            <HeartTwoTone twoToneColor='magenta' />
            &nbsp; {story.likes} &nbsp;
          </Tooltip>
        </div>,
        <Tooltip placement='top' title='Edit' color='skyblue'>
          <EditOutlined onClick={() => {setSelectedId(story._id)}} />
        </Tooltip>,
        <Tooltip placement='top' title='Delete' color='red'>
          <DeleteTwoTone twoToneColor='red' onClick={() => dispatch(deleteStory(story._id))} />
        </Tooltip>,
      ]}
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          rows: 2,
          expandable: true,
          symbol: 'more',
          onExpand: () => {
            setExpand(true);
          },
          onEllipsis: () => {
            setExpand(false);
          },
        }}
      >
        {story.caption}
      </Paragraph>
      {expand ? (
        <Link href='#'>{story.tags.split(' ').map((tag) => `#${tag} `)}</Link>
      ) : null}
      <br />
      <Text type='secondary'>{moment(story.postDate).fromNow()}</Text>
    </Card>
  );
};

export default Story;
