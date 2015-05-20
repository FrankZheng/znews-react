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
	getInitialState: function() {
		return {
			sections: ['头条','科技','财经'],
			selected: 0,
		};
	},

	selectSection: function(index) {
		this.setState({
			sections: this.state.sections,
			selected: index,
		});
	},

	render: function() {
		return (
			<View style={styles.container}>
				<PagerSlidingTabStrip style={styles.strip}
					items={this.state.sections} 
					selected={this.state.selected} 
					selectItem={this.selectSection}/>
				<View style={styles.separator} />
				<View style={styles.pager} />
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1 ,
		flexDirection: 'column',
	},
	strip: {
		flex: 1,
		//backgroundColor: '#0000cc',
		
	},
	separator: {
		height: 1,
		backgroundColor: '#cccccc'
	},
	pager: {
		flex: 5,
		//backgroundColor: '#cc0000',
	},

});

module.exports = SectionsScreen;
