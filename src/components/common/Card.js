import React from 'react';
import { View } from 'react-native';
import {
  C_CARD_COLOR, C_GREY_1 } from '../types';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: C_CARD_COLOR,
    borderBottomWidth: 0,
    shadowColor: C_GREY_1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 2,
    marginBottom: 2
  }
};

export { Card };
