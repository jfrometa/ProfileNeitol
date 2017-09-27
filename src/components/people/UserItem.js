import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import {
  C_ACCENT,
  C_CARD_COLOR,
  C_DEFAULT_TEXT_COLOR,
  C_GREY_1
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
 // bday
 // lastname
 // mothertonge
 // name
 // nationality
 // party
 // picture
 // religion

  render() {
    const {
     lastname,
     name,
     nationality,
     party,
     picture } = this.props.details;

    return (
      <View style={styles.cardStyle}>
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

          <Text style={styles.party}>{party}</Text>
        </View>
    </TouchableOpacity>
  </View>
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
    color: C_GREY_1
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
  nameAndNationality: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 12
  },
  party: {
    alignSelf: 'center',
    color: C_ACCENT,
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
