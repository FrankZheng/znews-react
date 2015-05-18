'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var NewsDetailScreen = require('./NewsDetailScreen');

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
      <View style={styles.container}>
        <Text>
          Loading news...
        </Text>
      </View>
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
      <View>
        <TouchableHighlight onPress={() => this.selectNews(news)}>
          <View style={styles.container}>
            <Image 
              style={styles.thumbnail}
              source={{uri: thumbUrl}} 
            />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{news.title}</Text>
              <Text style={styles.publisher}>{news.publisher} </Text>
              <Text style={styles.pubDate}>{news.pubDate}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5,
  },
  rightContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize : 16,
    textAlign: 'left',
  },
  publisher: {
    textAlign: 'left'
  },
  pubDate: {
    textAlign: 'right'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 80,
    height: 80,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = NewsListScreen