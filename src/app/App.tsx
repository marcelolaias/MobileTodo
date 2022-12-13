import React from 'react';
import {SafeAreaView} from 'react-native';

import {Header} from '../components';
import HomePage from '../pages/home/Home.page';

import {styles} from './App.styled';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Minhas Atividades" />
        <HomePage />
    </SafeAreaView>
  );
};

export default App;
