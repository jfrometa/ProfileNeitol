import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';
import {
  C_DEFAULT_TEXT_COLOR,
  C_CARD_COLOR,
  C_NAV_MENU } from '../types';

  const { width } = Dimensions.get('window');
  const w = width;
//import { updateClubId } from '../actions';
class NewsFeedItem extends Component {
  renderDivider() {
    return (
        <View
        style={{
          flex: 1,
          height: 'auto',
          alignSelf: 'center' }}
        />
    );
  }
  render() {
    if (this.props.post !== undefined) {
    const { message, full_picture, from } = this.props.post;
    if (!full_picture) {
      return <View />;
    }
    return (
      <LinearGradient
          colors={[C_NAV_MENU, C_CARD_COLOR, C_CARD_COLOR]}
          style={styles.card}
      >
          <View style={styles.touchContainer}>
            <View style={styles.header}>
              <Image
                style={styles.headerImage}
                source={{ uri: `https://graph.facebook.com/v2.10/${from.id}/picture?type=large` }}
                cache
              />
                <Text style={styles.tittleStyle}> {from.name} </Text>
            </View>

                {this.renderDivider()}
            <View style={styles.body}>

              <Image
                style={styles.bodyImage}
                source={{ uri: full_picture }}
                cache
              />

                <Text
                  style={styles.bodyStyle}
                  numberOfLines={3}
                  renderTruncatedFooter={() => <Text >Read More</Text>}
                >{message}
                </Text>
            </View>

        </View>
    </LinearGradient>
    );
  }
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  tittleStyle: {
    color: C_DEFAULT_TEXT_COLOR,
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    paddingLeft: 8,
    backgroundColor: 'transparent'
  },
  card: {
    flex: 1
  },
  touchContainer: {
    flexDirection: 'column',
    flex: 1
  },
  headerImage: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 16,
    paddingBottom: 2
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 4,
    backgroundColor: 'transparent'
  },
  bodyImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 320,
    width: w
  },
  bodyStyle: {
    backgroundColor: 'transparent',
    padding: 8,
    fontSize: 13,
    textAlign: 'left',
    color: C_DEFAULT_TEXT_COLOR
  }
});

export default connect(null, { })(NewsFeedItem);
