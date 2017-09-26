import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  C_ACCENT,
  C_CARD_COLOR,
  C_DEFAULT_TEXT_COLOR,
  GOAL_IMAGE,
  YELLOW_CARD_IMAGE,
  RED_CARD_IMAGE
} from '../types';

class LeadsItem extends Component {
  toggleModalAndRequestDetails() {
    //router flux call to the userDetails panel with props
    Actions.slidingupplayer({ details: this.props.leads });
  }

rederIcon(action) {
  switch (action) {
    case 'Goles':
      return GOAL_IMAGE;

    case 'T. Amarillas':
      return YELLOW_CARD_IMAGE;

    case 'T. Rojas':
      return RED_CARD_IMAGE;

    default:
      return GOAL_IMAGE;
  }
}
renderStat(label) {
  if (label === 'Goles') {
    return this.props.leads.goals;
  } else if (label === 'T. Amarillas') {
    return this.props.leads.yellow_cards;
  }
  return this.props.leads.red_cards;
}

renderPicture() {
  if (this.props.leads.picture) {
    return (
    <Image
      style={styles.image}
      source={{ uri: this.props.leads.picture }}
      cache
    />
  );
  }
}
  render() {
    const {
       name,
       team } = this.props.leads;

    return (
      <View style={styles.cardStyle}>
      <TouchableOpacity onPress={this.toggleModalAndRequestDetails.bind(this)} >
          <View style={styles.container}>

            {this.renderPicture()}

            <View style={styles.tittleContainer}>
              <Text style={styles.playerName}>{name}</Text>
              <Text style={styles.teamName}>{team}</Text>

            </View>

            <View style={styles.statistics}>
              <Text style={styles.stat}>{this.renderStat(this.props.label)}</Text>
              <Image
               source={this.rederIcon(this.props.label)}
               style={styles.icon}
              />
            </View>
        </View>
    </TouchableOpacity>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  statistics: {
    flex: 1,
    justifyContent: 'flex-end',
     flexDirection: 'row',
     alignSelf: 'center'
  },
  tittleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center'
  },
  playerName: {
    padding: 1,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: C_DEFAULT_TEXT_COLOR
  },
  teamName: {
    padding: 1,
    fontSize: 14,
    color: C_ACCENT,
    textAlign: 'center'
  },
  stat: {
    textAlign: 'center',
    paddingRight: 4,
    fontSize: 20,
    opacity: 0.7,
    color: C_DEFAULT_TEXT_COLOR,
    fontWeight: '600'
  },
  cardStyle: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
},
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 4,
    paddingTop: 4,
    alignSelf: 'center'
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center'
  }
});

export default connect(null, {})(LeadsItem);
