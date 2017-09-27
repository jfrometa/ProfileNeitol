import React, { Component } from 'react';
import {
   Image,
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  C_CARD_COLOR,
  C_ACCENT,
  C_DEFAULT_TEXT_COLOR,
  icons,
  C_GREY_1
 } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
  },
  headerContainer: {
    height: 180,
    marginTop: 50,
    backgroundColor: C_CARD_COLOR
  },
  headerImage: {
    margin: 4,
    borderRadius: 55,
    alignSelf: 'center',
    height: 110,
    width: 110
  },
  headerName: {
    fontSize: 18,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
    color: C_DEFAULT_TEXT_COLOR
  },
  headerNumber: {
    color: C_ACCENT,
    alignSelf: 'center',
    textAlign: 'center'
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
  },
  rowFormat: {
    flex: 1,
    flexDirection: 'row'
  },
  rowIcon: {
      height: 16,
      width: 16,
      tintColor: C_GREY_1,
      marginLeft: 16,
      alignSelf: 'center'
  },
  rowInfo: {

  },
  rowTextContainer: {
    flexDirection: 'column',
    padding: 4,
    paddingTop: 8
  },
  rowTitle: {
    color: C_ACCENT
  }
 });

class UserDetails extends Component {
  render() {
    const {
     bday,
     lastname,
     mothertonge,
     name,
     nationality,
     party,
     picture,
     religion } = this.props.details;

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.headerContainer} onPress={() => Actions.pop()}>
            <Image
             source={{ uri: picture }}
             style={styles.headerImage}
             cache
            />
            <Text style={styles.headerName}> {name} {lastname} </Text>
            <Text style={styles.headerNumber}> {bday} </Text>
          </TouchableOpacity>

          <ScrollView style={styles.bodyContainer}>

          <View style={styles.rowFormat} >
            <Image
             source={icons.lenguage}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {mothertonge} </Text>
              <Text style={styles.rowTitle}> Mother Thonge </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={icons.party}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {party} </Text>
              <Text style={styles.rowTitle}> Party </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={icons.nationality}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {nationality} </Text>
              <Text style={styles.rowTitle}> Natinality </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={icons.religion}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {religion} </Text>
              <Text style={styles.rowTitle}> Religion </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default UserDetails;
