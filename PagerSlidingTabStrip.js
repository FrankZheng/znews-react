'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} = React;



var PagerSlidingTabStrip = React.createClass({
	getInitialState: function() {
		return {
			items : ['Top News', 'Finance', 'Technology', '头条', '科技', '财经'],
			selected : 0,
		};
	},

	selectItem: function(index) {
		this.setState({
			items: this.state.items,
			selected: index,
		});
	},
	
	render: function() {
		return (
			<ScrollView style={styles.scrollview}
				horizontal={true}>
				{this.state.items.map((item,i) => 
					<TouchableHighlight 
						onPress={()=>this.selectItem(i)}
						underlayColor="white">
						<Text style={(i!==this.state.selected) ? styles.item : styles.selectedItem}>
							{item}
						</Text>
					</TouchableHighlight>
				)}
			</ScrollView>
		);
	},

});

var styles = StyleSheet.create({
	scrollview: {
		flex: 1,
	},
	item: {
		margin: 5,
		color: 'black',
	},
	selectedItem: {
		margin: 5,
		color: 'blue',
	},


});


module.exports = PagerSlidingTabStrip;