import React, { Component } from 'react';
import { connect } from 'react-redux';
  import {
  View,
  StyleSheet
} from 'react-native';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {
  requestPersonalInfo
} from './actions';
import { C_NAV_MENU, C_DEFAULT_TEXT_COLOR, C_ACCENT } from '../types';
import UsersList from './UsersList';

class UsersHandler extends Component {
  componentWillMount() {
    //console.log(`this is the prop label ${this.props.label}`);
    this.props.requestPersonalInfo();
    //this.dataSource = [];
  }

//prerenderingSiblingsNumber={2}
  render() {
    return (
      //space for the bottomNavBar
      <ScrollableTabView
        style={styles.scrollableTab}
        scrollWithoutAnimation
        initialPage={0}
        prerenderingSiblingsNumber={2}
        tabBarPosition="top"
        renderTabBar={
          () =>
          <DefaultTabBar
              activeTextColor={C_ACCENT}
              inactiveTextColor={C_DEFAULT_TEXT_COLOR}
              textStyle={styles.tabTextStyle}
              underlineStyle={styles.underLineStyle}
              style={styles.tabBar}
          />
          }
      >
        {this.props.rows}
      </ScrollableTabView>
    );
  }
}

//Making a stylesheet from a style object makes it possible to refer to it by ID
//instead of creating a new style object every time.
const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  scrollableTab: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  underLineStyle: {
    backgroundColor: C_ACCENT
  },
  tabTextStyle: {
   fontSize: 16,
   fontWeight: '500'
 },
 tabBar: {
   borderBottomColor: C_NAV_MENU,
   backgroundColor: C_NAV_MENU,
   borderWidth: 0
 }
});

const mapStateToProps = (state) => {
  //transform object into key, value
    const {
      loading,
      error } = state.person;

  const rows = [];
  const localLabels = ['Contacts', 'Public Profile'];
  let i = 0;

  localLabels.forEach(label => {
    i++;
    if (label === 'Contacts') {
      rows.push(
        <View
          tabLabel={label}
          key={i}
          style={styles.tabView}
        >
          <UsersList />
        </View>
      );
    } else {
      rows.push(
        <View
          tabLabel={label}
          key={i}
          style={styles.tabView}
        />
      );
    }
    });

  return {
    error,
    loading,
    rows };
};

export default connect(mapStateToProps, { requestPersonalInfo })(UsersHandler);
