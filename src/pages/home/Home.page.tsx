import React from 'react';
import {Text, View, ScrollView, Alert} from 'react-native';

import {InputButton, TaskListItem} from '../../components';

import {styles} from './Home.styled';


const listTasks = [
  {
    id: 1,
    title: 'Tarefa 1',
  },
  {
    id: 2,
    title: 'Compromisso 1',
  },
];

const HomePage = () => {
  return (
    <View style={styles.bodyPage}>
      <InputButton 
        placeholder='Descreva a atividade' 
        onPress={(description) => alert(description || 'Evento de home')} />
        
      <ScrollView style={styles.scrollView}>
        <TaskListItem list={listTasks} onDelete={id => alert(id)} />
      </ScrollView>
    </View>
  );
};

export default HomePage;

