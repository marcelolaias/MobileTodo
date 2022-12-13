import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Text,
  View,
  TextInput as Input,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import {styles} from './InputButton.styled';

interface IInputButton {
  placeholder: string;
  onPress: (event: GestureResponderEvent) => void;
}

const plusIcon = <Icon name="plus" size={20} color="#fff" />;

const InputButton = ({placeholder, onPress}: IInputButton): JSX.Element => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewLeft}>
        <Input
          style={styles.input}
          placeholder={placeholder || 'InputButton Placeholder'}
        />
      </View>
      <View style={styles.viewRight}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={onPress}>
          {plusIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputButton;
