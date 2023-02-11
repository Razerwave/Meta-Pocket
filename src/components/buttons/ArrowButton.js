import React from 'react';
import {useTheme} from 'styled-components';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Stack from '../Stack';
import {white} from '../../constants/colors';

const ArrowButton = () => {
  const {bottomTab} = useTheme();
  return (
    <TouchableOpacity>
      <Stack
        style={{
          width: 34,
          height: 34,
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 60,
          backgroundColor: bottomTab.activeColor,
          borderWidth: 0,
        }}>
        <Text style={{color: 'white'}}>
          <IonIcon name="arrow-up-outline" size={25} color={white} />
        </Text>
      </Stack>
    </TouchableOpacity>
  );
};

export default ArrowButton;
