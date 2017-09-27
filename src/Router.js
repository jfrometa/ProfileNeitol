import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import UsersHandler from './components/people/UsersHandler';
import UserPanel from './components/people/UserPanel';
import Support from './components/Support';

import {
  C_ACCENT,
  C_NAV_MENU,
  C_DEFAULT_TEXT_COLOR,
  C_CARD_COLOR,
  C_GREY_300,
  C_DEFAULT,
  icons
} from './components/types';

//by using StyleSheet for your styles you will eliminate unnecesary JS bridge conections
const styles = StyleSheet.create({
  scene: {
    paddingTop: 102,
  },
  primaryColorBackGround: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  router: {
    flex: 1,
    backgroundColor: C_NAV_MENU,
    height: 102,
    borderWidth: 1,
    borderColor: C_CARD_COLOR,
    borderBottomWidth: 0
  },
  bottomBar: {
    borderColor: C_GREY_300,
    borderTopWidth: 1
  },
  navBarLeftText: {
    marginTop: 13,
    height: 24,
    color: C_ACCENT
  },
  navBarTittle: {
    marginTop: 36,
    paddingLeft: 16,
    textAlign: 'left',
    color: C_DEFAULT_TEXT_COLOR,
    alignSelf: 'flex-start',
    fontSize: 25,
    fontWeight: '700'
  },
  navBarLeft: {
    marginTop: 13,
    tintColor: C_ACCENT
  },
  navBarRight: {
    marginTop: 13,
    paddingRight: 24,
    width: 20,
    height: 20,
    tintColor: C_ACCENT,
    resizeMode: 'contain'
  },
  iconBottomBar: {
    height: 24,
    width: 24,
    tintColor: C_DEFAULT,
    alignSelf: 'center'
  }
});

//////// SCENES
const scenes = Actions.create(
    <Scene key="main" style={styles.primaryColorBackGround}>
      <Scene
        key="profiles"
        rightButtonIconStyle={styles.navBarRight}
        titleStyle={styles.navBarTittle}
        sceneStyle={styles.scene}
        rightButtonImage={icons.settings}
        onRight={() => Actions.support()}
        component={UsersHandler}
        title="Profiles"
      />

     <Scene
       leftButtonText={styles.navBarLeftText}
       leftButtonIconStyle={styles.navBarLeft}
       backButtonTextStyle={styles.navBarLeftText}
       backTitle="Back"
       sceneStyle={styles.scene}
       key="support"
       component={Support}
       title="Support"
     />

    <Scene
      key="userpanel"
      component={UserPanel}
      direction="vertical"
      hideNavBar
    />

  </Scene>
  );

  class RouterComponent extends Component {

    componentWillMount() {
    //   setTimeout(() => {
    //      Actions.calendar({ title: this.props.divisionName
    //   });
    // });
    }

   componentWillReceiveProps() {
    //      Actions.calendar({
    //        //key: 'calendar',
    //        title: this.props.divisionName
    //  });
   }
    render() {
      return (
        < Router
          navigationBarStyle={styles.router}
          scenes={scenes}
        />
      );
    }
}
// const mapStateToProps = (state) => {
//   //transform object into key, value
//
//       //  console.log('STORE_STORE', divisionName);
//     //  scenes.calendar({ title: divisionName });
//   return { };
// };
//const ConnectedRouter = connect()(RouterComponent);

export default connect(null,
  {})(RouterComponent);
