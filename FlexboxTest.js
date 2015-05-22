'user strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} = React;

var Strip = React.createClass({
	
	render: function() {
		var titles = ['one', 'two', 'three'];
		return (
			<View style={this.props.style}>
				<ScrollView 
					automaticallyAdjustContentInsets={false} 
					horizontal={true}>
						{ titles.map((title) => 
							<Text style={styles.title}>
								{title}
							</Text>
						)}
				</ScrollView>
			</View> 
			
				 
				//
			/*
			
			*/
		);
	}
});

var Center = React.createClass({
	render: function() {
		return (<ScrollView style={this.props.style} />)
	}
});

var FlexboxTest = React.createClass({
	render: function() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Strip style={styles.top} />
				<Center style={styles.center} />
				<View style={styles.bottom} />
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#cccccc',
		paddingTop: 64,
	},

	top: {
		height: 100,
		backgroundColor: 'red',
	},

	center: {
		flex: 1,
		backgroundColor: 'yellow',
	},

	bottom: {
		height: 100,
		backgroundColor: 'blue',
	},

	strip: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'green',
	},

	title: {
		fontSize: 20,
		textAlign: 'center',
		alignSelf: 'center',
	},

	

});


module.exports = FlexboxTest;