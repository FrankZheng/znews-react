'user strict';

var React = require('react-native');
var {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
} = React;

var FlexboxTest = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<View style={styles.top} />
				<View style={styles.center} />
			</View>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#cccccc',

	},

	top: {
		top: 64,
		flex: 1,
		backgroundColor: 'red',
	},

	center: {
		flex: 5,
		backgroundColor: 'green',
	},

	bottom: {
		height: 30,
		backgroundColor: 'blue',
	},

});


module.exports = FlexboxTest;