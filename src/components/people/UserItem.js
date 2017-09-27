import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import {
  C_ACCENT,
  C_CARD_COLOR,
  C_DEFAULT_TEXT_COLOR,
  C_UPGRADE_ORANGE,
  C_NAV_MENU
} from '../types';

class LeadsItem extends Component {
  componentWillMount() {
    //console.log('details', this.props.details);
  }

  toggleModalAndRequestDetails() {
    //router flux call to the userDetails panel with props
    Actions.userpanel({ details: this.props.details });
  }
renderName(name, lastname) {
  if (this.props.details !== undefined) {
    return `${name} ${lastname}`;
  }
}

  render() {
    const {
     lastname,
     name,
     nationality,
     party,
     picture } = this.props.details;

    return (
      <LinearGradient
          colors={[C_NAV_MENU, C_CARD_COLOR, C_CARD_COLOR]}
          style={styles.cardStyle}
      >
      <TouchableOpacity onPress={this.toggleModalAndRequestDetails.bind(this)} >
          <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: picture }}
            cache
          />
          <View style={styles.nameAndNationality}>
            <Text style={styles.name}>{this.renderName(name, lastname) }</Text>
            <Text style={styles.nationality}>{nationality}</Text>
          </View>

          <View style={styles.partyContainer}>
          <Text style={styles.party}>{party}</Text>
          </View>
        </View>
    </TouchableOpacity>
  </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  name: {
    padding: 1,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'left',
    color: C_DEFAULT_TEXT_COLOR
  },
  nationality: {
    padding: 1,
    fontSize: 14,
    fontWeight: '300',
    textAlign: 'left',
    color: C_ACCENT
  },
  cardStyle: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
},
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 2
  },
  nameAndNationality: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 12
  },
  partyContainer: {
    flex: 1,
    marginBottom: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  party: {
    marginRight: 16,
    marginBottom: 6,
    color: C_UPGRADE_ORANGE,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 4,
    paddingTop: 4,
    alignSelf: 'center'
  }
});

export default connect(null, {})(LeadsItem);
