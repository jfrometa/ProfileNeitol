import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
   ListView,
   View
 } from 'react-native';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import { requestPersonalInfo } from './actions';
import { Spinner } from '../common';
import { C_CARD_COLOR, C_DEFAULT_TEXT_COLOR, C_GREY_1 } from '../types';

class UserList extends Component {
  componentWillMount() {
      //nextProps are the next set of props that this component
      // will render with this.props
    //console.log('Props', this.props);
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component
      // will render with this.props
    //console.log('nextProps', nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const personalInfo = props;
    if (personalInfo) {
      if (personalInfo.uid !== undefined) {
        delete personalInfo.uid;
      }

      const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
      });
      this.dataSource = ds.cloneWithRows(personalInfo.personalInfo);
    }
  }

 renderRow(detail, rowID) {
   return (
     <UserItem label={this.props.label} details={detail} key={rowID} />
   );
 }

 renderList() {
   if (this.props.personalInfo !== undefined) {
      return (
        <ListView
          style={styles.list}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
          renderSeparator={(sectionID, rowID) =>
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
            }
        />
      );
   }
 }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
  return (
      <View style={styles.peopleList} >
       {this.renderList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  peopleList: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
  },
  headerContainer: {
     height: 40,
     flexDirection: 'row',
     backgroundColor: C_DEFAULT_TEXT_COLOR
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
   marginLeft: 75,
   marginRight: 12,
   borderBottomColor: C_GREY_1
 },
 list: {
    flex: 1,
    backgroundColor: C_CARD_COLOR
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
