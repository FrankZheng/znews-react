'use strict';

var React = require('react-native');
var {
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var NewsDetailScreen = require('./NewsDetailScreen');
var NewsCell = require('./NewsCell');
var LoadingView = require('./LoadingView');

var XNEWS_SERVER_URL = "http://xnewsreader.herokuapp.com/thumb";

var REQUEST_URL = "http://xnewsreader.herokuapp.com/articles?lange=zh&topic=t&limit=20&output=json";

function getThumbUrlFromUrl(url:string) :string {
  return XNEWS_SERVER_URL + "?thumburl=" + url;
}


var NewsListScreen = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    }
  },

  componentDidMount: function() {
    this.fetchData();

  },

  fetchData: function() {
    fetch(REQUEST_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState( {
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        loaded: true,
      });
    })
    .done();
  },

  renderLoadingView: function() {
    return (
      <LoadingView
        message="Loading news..."
      />
    );
  },

  selectNews : function(news: Object) {
    //console.log("selectNews, title: ", news.title);
    this.props.navigator.push({
      title: news.title,
      component: NewsDetailScreen,
      passProps: {news},
    });
  },

  renderNewsView: function(news: Object) {
    var thumbUrl = getThumbUrlFromUrl(news.thumb);
    return (
      <NewsCell
        onSelect={() => this.selectNews(news)}
        news={news}
        thumbUrl={thumbUrl}
      />
    );
  },
  
  render: function() {
    if(!this.state.loaded) {
      return this.renderLoadingView();
    }
    return (
      <ListView 
        dataSource={this.state.dataSource}
        renderRow={this.renderNewsView}
        style={styles.listView}
      />
      );
  },

});

var styles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF',
  },
});

module.exports = NewsListScreen