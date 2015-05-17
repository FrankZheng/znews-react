/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var NEWS_DATA = [
  {
    "_id": "555874e02e3ce90300162f0f",
    "title": "科技随笔：“系统性衰退”使俄航天领域失败频频",
    "publisher": "新华网",
    "link": "http://news.xinhuanet.com/world/2015-05/17/c_1115310222.htm",
    "category": "科技",
    "pubDate": "2015-05-17T10:46:27.000Z",
    "thumb": "http://t1.gstatic.com/images?q=tbn:ANd9GcR-YYXkRtI2H9oDjzlmAw6pT64vR30ooLN7pHRgN-w_JzxIISRVqLpwbogO--CV6wj2Nf_kk5E",
    "brief": "新华网莫斯科５月１７日电（记者张继业）近３周来，俄罗斯航天领域接连３次出现状况，其中两次运载火箭发射失败，一次国际空间站变轨失败。有分析称，这是俄航天领域资金投入不足、人才流失等，引发航天&nbsp;...",
    "state": 1
  },
];

var XNEWS_SERVER_URL = "http://xnewsreader.herokuapp.com/thumb";

var REQUEST_URL = "http://xnewsreader.herokuapp.com/articles?lange=zh&topic=t&limit=20&output=json";

function getThumbUrlFromUrl(url:string) :string {
  return XNEWS_SERVER_URL + "?thumburl=" + url;
}


var znews_react = React.createClass({
  getInitialState: function() {
    return {
      news : null,
    }
  },

  componentDidMount: function() {

  },
  
  render: function() {
    var news = NEWS_DATA[0];
    var thumbUrl = getThumbUrlFromUrl(news.thumb);
    return (
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
    );
  }
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
  }
});

AppRegistry.registerComponent('znews_react', () => znews_react);
