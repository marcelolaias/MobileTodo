import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './Header.styled';

interface IHeader {
  title: string;
}

const lightIcon = <Icon name="asterisk" size={20} color="#fff" />;

const Header = ({title}: IHeader): JSX.Element => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewLeft}>
        <Text style={styles.text}>{title || 'ToDo App'}</Text>
      </View>
      <View style={styles.viewRight}>{lightIcon}</View>
    </View>
  );
};

export default Header;
