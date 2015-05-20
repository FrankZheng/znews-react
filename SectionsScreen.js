'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} = React;

var PagerSlidingTabStrip = require('./PagerSlidingTabStrip');

var sections = ['Top News', 'Finance', 'Technology'];

var SectionsScreen = React.createClass({

	render: function() {
		return (
			<View style={styles.container}>
			<PagerSlidingTabStrip style={styles.strip}
				items={sections} selected={0} />
			<View style={styles.separator} />
			<View style={styles.pager} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex:1,

	},
	strip: {
		flex: 0.1,
		backgroundColor: '#0000cc',
		
	},
	separator: {
		height: 1,
		backgroundColor: '#cccccc'
	},
	pager: {
		flex: 0.9,
		backgroundColor: '#cc0000',
	},

});

module.exports = SectionsScreen;
