import React, { Component } from 'react';
import {
   ListView,
   StyleSheet,
   View } from 'react-native';
import { connect } from 'react-redux';
import NewsFeedItem from './NewsFeedItem';
import { requestFBPost } from './actions';
import { Spinner } from '../common';
import {
  COMPANY_MAIN_FACEBOOK,
  C_NAV_MENU,
  C_GREY_3,
} from '../types';

class NewsFeed extends Component {
  componentWillMount() {
    // default === 100
    this.props.requestFBPost(COMPANY_MAIN_FACEBOOK, '5');
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
      //nextProps are the next set of props that this component
      // will render with this.props
    this.createDataSource(nextProps);
  }

  createDataSource(props) {
    const { news } = props;
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(news);
  }

 renderRow(post, rowID) {
   return (
     <NewsFeedItem post={post} key={rowID} uid={rowID} />
   );
 }

  render() {
    if (this.props.loading) {
      return (
        <View style={styles.container}>
          <Spinner />
        </View>);
    }
      return (
        <ListView
          style={styles.ListView}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={(rowData, sectionID, rowID) => this.renderRow(rowData, rowID)}
        />
    );
  }
}

const styles = StyleSheet.create({
  ListView: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  container: {
    flex: 1,
    backgroundColor: C_NAV_MENU
  },
  Title: {
    alignSelf: 'center',
    fontSize: 14
  },
  separator: {
    marginBottom: 1,
    borderBottomWidth: 1,
    marginLeft: 12,
    marginRight: 12,
    borderBottomColor: C_GREY_3
}
 });

//calendarInfo refers to the calendar reducer
const mapStateToProps = (state) => {
  const {
    error,
    loading,
    post,
  } = state.facebook;

   const news = [];
   if (post) {
    post.forEach((p) => {
       news.push(p);
     });
   }
  return { news, loading, error };
};


export default connect(mapStateToProps,
  { requestFBPost })(NewsFeed);
