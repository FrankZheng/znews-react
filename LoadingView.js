'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
} = React;


var LoadingView = React.createClass({

	render: function() {
    return (
      <View style={styles.loadingView}>
        <Text style={styles.loadingText}>
          {this.props.message}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  loadingText: {
    fontSize: 20,
  },
});


module.exports = LoadingView;