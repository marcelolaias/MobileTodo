import React from 'react';
import {Alert, GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {ListItem} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './TaskListItem.styled';

interface ITaskList {
  onDelete:  (id: number) => void;
  list: ITaskListItem[];
}

interface ITaskListItem {
  id: number;
  title: string;
}


const TaskListItem = (props: ITaskList): JSX.Element => {
  return (
    <View>
      {props.list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name='clock-o' size={20} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Title>
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.onDelete(item.id)}
            >
              <Icon name="trash" size={16} color="white" />
            </TouchableOpacity>
          </ListItem.Title>
        </ListItem>
      ))}
    </View>
  );
};

export default TaskListItem;
