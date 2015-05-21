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
			selected: index,
		});
		var width = 375;
		var x = index * width;
		console.log('selectSection', this.listview);
		this.refs.listview.refs.listviewscroll.scrollTo(-64,x);

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

	onListViewScroll: function(event) {
		console.log('onListViewScroll', event);

	},

	onScrollAnimationEnd: function(event) {
		console.log('onScrollAnimationEnd', event);
	},

	onListViewChangeVisibieRows: function(visibleRows, changedRows) {
		console.log('onListViewChangeVisibieRows, visibleRows', visibleRows);
		console.log('onListViewChangeVisibieRows, changedRows', changedRows);
	},

	renderListViewHeader: function() {
		return (
			<PagerSlidingTabStrip style={styles.strip}
					items={this.state.sections} 
					selected={this.state.selected} 
					selectItem={this.selectSection}/>
		);
	},

	renderTop: function() {

	},

	renderCenter: function() {

	},

	renderBottom: function() {

	},

	render: function() {

		var listview = (<ListView style={styles.pager} 
					ref={'listview'}
					dataSource={this.state.dataSource}
					pagingEnabled={true}
					horizontal={true}
					onLayout={this.onListViewLayout}
					renderRow={this.renderRow}
					onScroll={this.onListViewScroll}
					onChangeVisibleRows={this.onListViewChangeVisibieRows}
					onScrollAnimationEnd={this.onScrollAnimationEnd}
					automaticallyAdjustContentInsets={false}
					/>);
		return (
			<View style={styles.container}>
				<View style={styles.top} />
				{listview}
			</View>
		);
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1 ,
		//flexDirection: 'column',
		//alignItems: 'stretch',
		backgroundColor: 'red',
		//justifyContent: 'center',
		paddingTop: 64,
	},
	strip: {
		height: 30,
		backgroundColor: '#0000cc',
		
	},
	separator: {
		height: 1,
		backgroundColor: '#cccccc'
	},
	
	pager: {
		flex: 1,
		//backgroundColor: '#cccccc',
	},

	page: {
		//width: 375,
		//height: 555,
		//top:0,
		flex: 1,
		backgroundColor: '#999999',
		//justifyContent: 'center',
		//alignItems: 'center',
	},
	indictor: {
		fontSize: 30,
		textAlign: 'center',
	},
	top: {
		height: 200,
		backgroundColor: 'yellow',
	},
	center: {
		flex: 1,
		backgroundColor: 'gray',
	},
	bottom: {
		height: 100,
		backgroundColor: 'blue',

	},



});

module.exports = SectionsScreen;
