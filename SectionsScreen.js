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

var PAGE_WIDTH = 375;
var PAGE_HEIGHT = 555;

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
			selected: index,
		});
		var x = index * PAGE_WIDTH;
		//console.log('selectSection', this.listview);
		this.refs.listview.refs.listviewscroll.scrollTo(0, x);
	},

	onPageLayout: function(event) {
		console.log('onPageLayout', event);
	},

	renderRow: function(rowData: string) { 
		return (
			<View style={styles.page} onLayout={this.onPageLayout}>
				<Text style={styles.indictor}>
					{rowData}
				</Text>
			</View>
		);
	},

	onListViewLayout: function(event) {
		console.log('onListViewLayout', event);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		console.log("shouldComponentUpdate");
 	 	return nextProps.selected !== this.state.selected;
	},

	onListViewScroll: function(event) {
		console.log('onListViewScroll', event.nativeEvent.contentOffset.x);
		var x = event.nativeEvent.contentOffset.x;
		var threshold = PAGE_WIDTH / 3;
		var index = Math.round((x + threshold) / PAGE_WIDTH);
		this.setState({
			selected: index,
		});
	},

	onScrollAnimationEnd: function(event) {
		console.log('onScrollAnimationEnd');
	},
	
	render: function() {
		return (
			<View style={styles.container}>
				<PagerSlidingTabStrip style={styles.strip}
					items={this.state.sections} 
					selected={this.state.selected} 
					selectItem={this.selectSection} />

				<View style={styles.separator} />

				<ListView style={styles.pager} 
					ref={'listview'}
					automaticallyAdjustContentInsets={false}
					dataSource={this.state.dataSource}
					pagingEnabled={true}
					horizontal={true}
					onLayout={this.onListViewLayout}
					onScroll={this.onListViewScroll}
					scrollEventThrottle={100}
					renderRow={this.renderRow}
					/>	
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1 ,
		//flexDirection: 'column',
		//alignItems: 'stretch',
		//backgroundColor: '',
		//justifyContent: 'center',
		//paddingTop: 64,
	},
	strip: {
		flex: 1,
		backgroundColor: '#0000cc',
		
	},
	separator: {
		height: 1,
		backgroundColor: '#cccccc'
	},
	
	pager: {
		flex: 5,
		//backgroundColor: '#cccccc',
	},

	page: {
		width: PAGE_WIDTH,
		height: PAGE_HEIGHT,
		//flex: 1,
		//backgroundColor: '#999999',
		justifyContent: 'center',
		alignItems: 'center',
	},
	indictor: {
		fontSize: 30,
		textAlign: 'center',
	},
});

module.exports = SectionsScreen;
