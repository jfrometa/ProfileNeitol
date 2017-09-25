import React, { Component } from 'react';
import {
   View,
   Text,
   StyleSheet,
   Image,
   TouchableOpacity,
   Linking
 } from 'react-native';
import {
  C_NAV_MENU,
  UPGRADE_LOGO,
  C_GREY_1,
  C_UPGRADE,
} from './types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  topPayola: {
    height: 123,
    justifyContent: 'center'
  },
  headerUpgradeLogo: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    tintColor: C_UPGRADE
  },
  headerTittle: {
    color: C_GREY_1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18
  },
  title: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    fontSize: 20,
    color: C_GREY_1
  },
  titleWithColor: {
    marginTop: 16,
    paddingLeft: 16,
    fontSize: 20,
    color: C_UPGRADE
  },
  formatText: {
    paddingLeft: 24,
  },
  textWithColor: {
    color: C_UPGRADE
  },
  Header: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  link: {

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
    bottom: 20,
    alignSelf: 'center',
  },
  poweredby: {
    color: C_GREY_1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 12
  }
 });

class Support extends Component {
  render() {
  return (
    <View style={styles.container}>
    <View style={styles.topPayola}>
      <Image
        resizeMode='contain'
        source={UPGRADE_LOGO}
        style={styles.headerUpgradeLogo}
      />
      <Text style={styles.headerTittle}>
        Upgrade Developers Group °
      </Text>
    </View>

    <Text style={[styles.title, { paddingTop: 70 }]}> Soporte y Servicios </Text>
    <Text style={styles.formatText}> Comunicate con nosotros cuando quieras: </Text>
    <TouchableOpacity
      style={styles.Header}
    >
      <Text style={styles.textWithColor}> info@upgrade.do </Text>
    </TouchableOpacity>

    <Text style={styles.title}> Negocios </Text>

    <Text style={styles.formatText}> Contacta nuestro equipo de negocios: </Text>
    <Text style={styles.formatText}> Telefono:+1 (809) 642-4226 </Text>
    <TouchableOpacity
      style={styles.Header}
    >
      <Text style={styles.textWithColor}> ventas@upgrade.do </Text>
    </TouchableOpacity>

    <Text style={[styles.formatText, { paddingTop: 16 }]}> Visita: </Text>
    <TouchableOpacity
      style={styles.Header}
      onPress={() => { Linking.openURL('https://www.upgrade.do'); }}
    >
      <Text style={styles.textWithColor}> www.upgrade.do </Text>
    </TouchableOpacity>

    <View style={styles.bottomPayola}>
      <Text style={styles.poweredby}>
        Powered by Upgrade
      </Text>
   </View>

  </View>
    );
  }
}

export default Support;
