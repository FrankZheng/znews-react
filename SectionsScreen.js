'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  ListView,
} = React;

var PagerSlidingTabStrip = require('./PagerSlidingTabStrip');

var sections = ['Top News', 'Finance', 'Technology'];

var SectionsScreen = React.createClass({
	getInitialState: function() {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		var sections = ['头条','科技','财经'];
		return {
			sections: sections,
			selected: 0,
			dataSource: ds.cloneWithRows(sections),
		};
	},

	selectSection: function(index) {
		this.setState({
			sections: this.state.sections,
			selected: index,
			dataSource: this.state.dataSource,
		});
	},

	renderRow: function(rowData: string) {
		return (
			<View style={styles.page}>
				<Text style={styles.indictor}>
					{rowData}
				</Text>
			</View>
		);
	},

	render: function() {
		return (
			<View style={styles.container}>
				<PagerSlidingTabStrip style={styles.strip}
					items={this.state.sections} 
					selected={this.state.selected} 
					selectItem={this.selectSection}/>
				<View style={styles.separator} />
				<ListView style={styles.pager} 
					dataSource={this.state.dataSource}
					pageEnabled={true}
					horizontal={true}
					renderRow={this.renderRow}
				/>
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
		backgroundColor: '#cccccc',
	},
	page: {
		width: 320,
		backgroundColor: '#999999',
		justifyContent: 'center',
	},
	indictor: {
		fontSize: 30,
		textAlign: 'center',
	}

});

module.exports = SectionsScreen;
