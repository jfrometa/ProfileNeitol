import React, { Component } from 'react';
import {
   Image,
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { LinearGradient } from 'expo';
import {
  C_CARD_COLOR,
  C_ACCENT,
  icons,
  C_GREY_1,
  C_UPGRADE_ORANGE,
  C_UPGRADE
 } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
  },
  headerContainer: {
    height: 180,
    marginTop: 50
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
    color: 'white',
    backgroundColor: 'transparent'
  },
  headerNumber: {
    backgroundColor: 'transparent',
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center'
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
  },
  bodyTitle: {
    margin: 8,
    fontSize: 17,
    fontWeight: '500',
    color: C_UPGRADE_ORANGE
  },
  biography: {
    margin: 8,
    paddingLeft: 12,
    fontSize: 15,
    fontWeight: '300',
    color: 'dimgray',
    textAlign: 'left'
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
  rowFormatContainer: {
    flexDirection: 'row',
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
     religion,
     biography } = this.props.details;

    return (
        <View style={styles.container}>
          <LinearGradient
              colors={
               [C_CARD_COLOR, C_UPGRADE_ORANGE, C_UPGRADE]
              }
          >
          <TouchableOpacity style={styles.headerContainer} onPress={() => Actions.pop()}>
            <Image
             source={{ uri: picture }}
             style={styles.headerImage}
             cache
            />
            <Text style={styles.headerName}> {name} {lastname} </Text>
            <Text style={styles.headerNumber}> {bday} </Text>
          </TouchableOpacity>
          </LinearGradient>
        <ScrollView style={styles.bodyContainer}>
            <Text style={styles.bodyTitle}> General </Text>
            <Text style={styles.biography}> {biography} </Text>

            <View style={styles.rowFormatContainer}>
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
            </View>

            <View style={styles.rowFormatContainer}>

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
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default UserDetails;
