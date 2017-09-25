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
  ICONS,
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
       division,
       dominant_food,
       goals,
       height,
       name,
       number,
       position,
       red_cards,
       team,
       weigth,
       yellow_cards } = this.props.details;

    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.headerContainer} onPress={() => Actions.pop()}>
            <Image
             source={{ uri: this.props.details.picture }}
             style={styles.headerImage}
             cache
            />
            <Text style={styles.headerName}> {name} </Text>
            <Text style={styles.headerNumber}> {number} </Text>
          </TouchableOpacity>

          <ScrollView style={styles.bodyContainer}>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.club}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {team} </Text>
              <Text style={styles.rowTitle}> Equipo </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.division}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {division} </Text>
              <Text style={styles.rowTitle}> Division </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.position}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {position} </Text>
              <Text style={styles.rowTitle}> Posicion </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.weight}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {weigth}/{height} </Text>
              <Text style={styles.rowTitle}> Peso y Estatura </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.dominantFoot}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {dominant_food} </Text>
              <Text style={styles.rowTitle}> Pie Dominante </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.goals}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {goals} </Text>
              <Text style={styles.rowTitle}> Goles </Text>
            </View>
          </View>

          <View style={styles.rowFormat} >
            <Image
             source={ICONS.cards}
             style={styles.rowIcon}
            />
            <View style={styles.rowTextContainer}>
              <Text style={styles.rowInfo}> {yellow_cards} Amarillas y {red_cards} Rojas </Text>
              <Text style={styles.rowTitle}> Goles </Text>
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

export default UserDetails;
