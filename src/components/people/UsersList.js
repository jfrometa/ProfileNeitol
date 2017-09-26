import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
   ListView,
   View,
 Text } from 'react-native';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { requestPersonalInfo } from './actions';
import { Spinner } from '../common';
import { C_CARD_COLOR, C_DEFAULT_TEXT_COLOR, C_NAV_MENU } from '../types';

class UserList extends Component {
  componentWillMount() {
    //console.log(`this is the prop label ${this.props.label}`);
    this.props.requestPersonalInfo();
    //this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component
      // will render with this.props
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const personalInfo = props;
    console.log(personalInfo);
    //console.log(props.goalLeaders);
    if (personalInfo) {
      if (personalInfo.uid !== undefined) {
        delete personalInfo.uid;
      }

      //const peopleArray = [];
      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      //add extra data you want to pass down
      // const dataKey = Object.keys(personalInfo);
      //   dataKey.forEach((key, index) => {
      //     personalInfo[key].index = index;
      //     peopleArray.push(personalInfo[key]);
      //   });

      this.dataSource = ds.cloneWithRows(personalInfo);
    }
  }

 renderRow(leads, rowID) {
   return (
     <UserItem label={this.props.label} leads={leads} key={rowID} />
   );
 }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
  return (
      <View style={styles.peopleList}>
        <Text> hola </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  peopleList: {
    flex: 1, backgroundColor: C_NAV_MENU
  },
  headerContainer: {
     height: 40,
     flexDirection: 'row',
     backgroundColor: C_NAV_MENU
  },
  stat: {
     flex: 1,
     fontSize: 17,
     textAlign: 'right',
     paddingRight: 16,
     fontWeight: '600',
     alignSelf: 'center',
     color: C_DEFAULT_TEXT_COLOR
  },
  banner: {
    backgroundColor: C_CARD_COLOR,
    margin: 8
  },
  headerPlayers: {
     flex: 1,
     fontSize: 17,
     textAlign: 'center',
     paddingLeft: 28,
     fontWeight: '600',
     alignSelf: 'center',
     color: C_DEFAULT_TEXT_COLOR
  },
  separator: {
   marginBottom: 1,
   borderBottomWidth: 1,
   marginLeft: 16,
   marginRight: 16,
   borderBottomColor: C_NAV_MENU
 },
 leadList: {
    flex: 1,
    backgroundColor: C_NAV_MENU
 },
 image: {
  padding: 8,
  resizeMode: 'contain',
  height: 35,
  width: 130,
  alignSelf: 'center'
 }
});

const mapStateToProps = (state) => {
  const {
      error,
      loading } = state.person;

  const personalInfo = _.map(state.person.personalInfo, (val, uid) => {
     return { ...val, uid };
   });

   if (personalInfo.length > 1) {
     personalInfo.sort((b, a) => {
       const before = +/\d+/.exec(a.lastname);
       const after = +/\d+/.exec(b.lastname);
       if (before > after) {
         return 1;
       } else if (before === after) {
         return 0;
       }
         return -1;
     });
   }

     return {
       error,
       loading,
       personalInfo,
    };
};

export default connect(mapStateToProps,
  { requestPersonalInfo })(UserList);
