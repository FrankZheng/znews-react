/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var NewsListScreen = require('./NewsListScreen');
var NewsDetailScreen = require('./NewsDetailScreen');
var PagerSlidingTabStrip = require('./PagerSlidingTabStrip');
var SectionsScreen = require('./SectionsScreen');
var FlexboxTest = require('./FlexboxTest');

var NewsApp = React.createClass({
  render: function() {
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'News',
          component: FlexboxTest, 
          //rightButtonTitle: "Refresh",
          //passProps: {style:{backgroundColor: 'yellow'}},
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});


AppRegistry.registerComponent('NewsApp', () => NewsApp);

module.exports = NewsApp;
