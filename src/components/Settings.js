import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Dimensions,
   Image,
   TouchableOpacity
 } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import {
  C_NAV_MENU,
  C_ACCENT,
  UPGRADE_LOGO,
  C_GREY_1,
  C_UPGRADE,
  C_GREY_3
 } from './types';

const { width } = Dimensions.get('window');
const w = width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  title: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    fontSize: 20,
    color: C_GREY_1
  },
  Header: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  NextIcon: {
    alignSelf: 'flex-end'
  },
  separator: {
    height: 1,
    width: w * 0.8,
    alignSelf: 'center',
    backgroundColor: C_GREY_3
  },
  upgradeLogo: {
    height: 24,
    width: 24,
    alignSelf: 'center',
    marginLeft: 8,
    tintColor: C_UPGRADE
  },
  bottomPayola: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 56,
    alignSelf: 'center',
  },
  poweredby: {
    color: C_GREY_1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 12
  }
 });

class Settings extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ajustes
      </Text>

      <TouchableOpacity
        style={styles.Header}
        onPress={() => { Actions.newssupport(); }}
      >
        <Text> Ayuda & Soporte </Text>
        <Icon
          style={styles.NextIcon}
          name='ios-arrow-forward'
          type='ionicon'
          color={C_GREY_1}
        />
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.Header}>
        <Text> Rate the App </Text>
        <Icon
          style={styles.NextIcon}
          name='ios-arrow-forward'
          type='ionicon'
          color={C_GREY_1}
        />
      </View>
      <View style={styles.separator} />

      <Text style={styles.title}>
        Legal
      </Text>

      <TouchableOpacity
        style={styles.Header}
      >
        <Text> Politicas de privacidad</Text>
        <Icon
          style={styles.NextIcon}
          name='ios-arrow-forward'
          type='ionicon'
          color={C_GREY_1}
        />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.Header}
      >
        <Text> Terminos del Servicio </Text>
        <Icon
          style={styles.NextIcon}
          name='ios-arrow-forward'
          type='ionicon'
          color={C_GREY_1}
        />
      </TouchableOpacity>
      <View style={styles.separator} />

      <View style={styles.bottomPayola}>
        <Text style={styles.poweredby}>
          Powered by Upgrade
        </Text>
        <Image
        resizeMode='contain'
        source={UPGRADE_LOGO}
        style={styles.upgradeLogo}
        />
      </View>
   </View>
    );
  }
}

export default Settings;
