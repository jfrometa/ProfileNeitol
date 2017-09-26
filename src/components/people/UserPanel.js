import React, { Component } from 'react';
import {
   View,
   StyleSheet
 } from 'react-native';
import { connect } from 'react-redux';
import UserDetails from './UserDetails';
import { C_NAV_MENU } from '../types';
import { Spinner } from '../common';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  }
 });

class UserPanel extends Component {
  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
             <Spinner />
       </View>
     );
  }

  return (
    <View style={styles.container}>
          <UserDetails details={this.props.details} />
     </View>
    );
  }
}

export default connect(null, { })(UserPanel);
