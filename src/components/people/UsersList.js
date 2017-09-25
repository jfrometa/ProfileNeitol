import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
   ListView,
   Image,
   View } from 'react-native';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import {
   requestGoalsLeaders,
   requestYellowCardLeaders,
   requestRedCardLeaders } from './actions';
import { Spinner } from '../common';
import { C_CARD_COLOR, C_DEFAULT_TEXT_COLOR, C_NAV_MENU, BPD_LOGO } from '../types';

class UserList extends Component {
  componentWillMount() {
    //console.log(`this is the prop label ${this.props.label}`);
    //this.requestDataForLabel();
    if (!this.props.goalLeaders ||
        !this.props.goalYellowCards ||
        !this.props.goalRedCards) {
        this.requestDataForLabel(this.props);
    }
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component
      // will render with this.props
      if (this.props.division !== nextProps.division) {
        //TODO: add validation not to render if we have a calendar already
        this.currentDivision = nextProps.division;
        this.requestDataForLabel(nextProps);
      }

    this.createDataSource(nextProps);
  }

  getPropsForDataSource(props) {
    switch (this.props.label) {
      case 'Goles':
        return props.goalLeaders;
      case 'T. Amarillas':
        return props.yellowCardLeaders;
      case 'T. Rojas':
        return props.redCardLeaders;
       default:
    }
  }

  sortArrayByNumber(prop) {
    if (prop.length > 1) {
      prop.sort((b, a) => {
        const before = +/\d+/.exec(a.goals);
        const after = +/\d+/.exec(b.goals);
        if (before > after) {
          return 1;
        } else if (before === after) {
          return 0;
        }
          return -1;
      });
    }
  }

   requestDataForLabel(props) {
      const {
          tournament,
          division } = props;

      switch (this.props.label) {
        case 'Goles':
       props.requestGoalsLeaders(tournament, division);
          break;
        case 'T. Amarillas':
        props.requestYellowCardLeaders(tournament, division);
          break;
        case 'T. Rojas':
      props.requestRedCardLeaders(tournament, division);
          break;

         default:

      }
    }

  createDataSource(props) {
    const data = this.getPropsForDataSource(props);
    //console.log(props.goalLeaders);
    if (data.uid !== undefined) {
      delete data.uid;
    }

    const leadsArray = [];
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    const dataKey = Object.keys(data);
      dataKey.forEach((key, index) => {
        if (index !== 0 && dataKey.length >= 8 && index % 8 === 0) {
          leadsArray.push({ isBanner: true });
        }
        data[key].index = index;
        leadsArray.push(data[key]);
      });
    if (dataKey.length % 9 !== 0) {
      leadsArray.push({ isBanner: true });
    }

    this.dataSource = ds.cloneWithRows(leadsArray);
  }

 renderRow(leads, rowID) {
   if (leads.isBanner) {
    return (
      <View style={styles.banner}>
      <Image
       source={BPD_LOGO}
       style={styles.image}
      />
    </View>
  );
   }
   return (
     <UserItem label={this.props.label} leads={leads} key={rowID} />
   );
 }

  render() {
    if (this.props.loading) {
      return <Spinner />;
    }
  return (
      <View style={styles.leadsList}>
        <ListView
          style={styles.leadList}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
          renderSeparator={(sectionID, rowID) =>
            <View key={`${sectionID}-${rowID}`} style={styles.separator} />
            }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  leadsList: {
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

//calendarView refers to the calendar reducer
const mapStateToProps = (state) => {
  const {
      error,
      loading } = state.leadsInfo;

  const goalLeaders = _.map(state.leadsInfo.goalLeaders, (val, uid) => {
         return { ...val, uid };
       });
  const redCardLeaders = _.map(state.leadsInfo.redCardLeaders, (val, uid) => {
     return { ...val, uid };
   });
  const yellowCardLeaders = _.map(state.leadsInfo.yellowCardLeaders, (val, uid) => {
     return { ...val, uid };
   });

   if (goalLeaders.length > 1) {
     goalLeaders.sort((b, a) => {
       const before = +/\d+/.exec(a.goals);
       const after = +/\d+/.exec(b.goals);
       if (before > after) {
         return 1;
       } else if (before === after) {
         return 0;
       }
         return -1;
     });
   }

   if (yellowCardLeaders.length > 1) {
     yellowCardLeaders.sort((b, a) => {
       const before = +/\d+/.exec(a.yellow_cards);
       const after = +/\d+/.exec(b.yellow_cards);
       if (before > after) {
         return 1;
       } else if (before === after) {
         return 0;
       }
         return -1;
     });
   }

   if (redCardLeaders.length > 1) {
     redCardLeaders.sort((b, a) => {
       const before = +/\d+/.exec(a.red_cards);
       const after = +/\d+/.exec(b.red_cards);
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
       yellowCardLeaders,
       redCardLeaders,
       goalLeaders
    };
};

export default connect(mapStateToProps,
  {
    requestGoalsLeaders,
    requestYellowCardLeaders,
    requestRedCardLeaders
  })(UserList);
