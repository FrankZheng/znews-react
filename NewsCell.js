var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;

var NewsCell = React.createClass({
	render: function() {
		return (
	      <View>
	        <TouchableHighlight onPress={this.props.onSelect}>
	          <View style={styles.row}>
	            <Image 
	              style={styles.thumbnail}
	              source={{uri: this.props.thumbUrl}} 
	            />
	            <View style={styles.textContainer}>
	              <Text style={styles.title}>{this.props.news.title}</Text>
	              <Text style={styles.publisher}>{this.props.news.publisher} </Text>
	              <Text style={styles.pubDate}>{this.props.news.pubDate}</Text>
	            </View>
	          </View>
	        </TouchableHighlight>
	      </View>
    	);
	},
});

var styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize : 16,
    textAlign: 'left',
  },
  publisher: {
    textAlign: 'left'
  },
  pubDate: {
    textAlign: 'right'
  },
  thumbnail: {
    width: 80,
    height: 80,
  },

});


module.exports = NewsCell;