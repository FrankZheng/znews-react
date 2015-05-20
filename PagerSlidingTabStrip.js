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
	
	render: function() {
		return (
			<ScrollView style={styles.scrollview}>
				<View style={styles.container}>  
				{this.props.items.map((item,i) => 
					<TouchableHighlight 
						onPress={()=>this.props.selectItem(i)}
						underlayColor="white">
						<Text style={[styles.item, i === this.props.selected && styles.selected]}>
							{item}
						</Text>
					</TouchableHighlight>
				)}
				</View>
			</ScrollView>
		);
	},

});

var styles = StyleSheet.create({
	scrollview: {
		flex: 1,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 15,
	},
	item: {
		fontSize: 16,
		color: 'black',
		paddingLeft: 20,
		paddingRight: 20,
		//backgroundColor: '#cccccc'
	},
	selected: {
		color: '#cc0000',
		fontWeight: 'bold',
		//backgroundColor: '#cccccc'
	},


});


module.exports = PagerSlidingTabStrip;