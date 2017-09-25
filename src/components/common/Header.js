import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { C_ACCENT, C_DEFAULT_TEXT_COLOR } from '../types';

const styles = StyleSheet.create({
viewStyle: {
  height: 110,
  flexDirection: 'row',
  backgroundColor: C_ACCENT,
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 25,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  elevation: 2
},
textStyle: {
  textAlign: 'center',
  width: 150,
  alignSelf: 'center',
  fontSize: 17,
  color: C_DEFAULT_TEXT_COLOR
  },
twoDotsStyle: {
  fontSize: 25,
  color: C_DEFAULT_TEXT_COLOR
  }
});
//make a Component
const Header = (props) => {
  //declare the styles object
  const { viewStyle, textStyle, twoDotsStyle } = styles;

  return (
    <View style={viewStyle} >
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={textStyle} > {props.team_a_name} </Text>
        <Text style={textStyle} > {props.team_a_score} </Text>
      </View>
        <Text style={twoDotsStyle} > : </Text>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={textStyle} > {props.team_b_name} </Text>
        <Text style={textStyle} > {props.team_b_score} </Text>
      </View>
    </View>
  );
};
//make the component available to other parts of the App
export { Header };
