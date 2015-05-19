'use strict';


var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  PixelRatio,
} = React;

function formatPubDate(pubDate:String): String {
  //if date is today, show time
  //else show month/day
  return pubDate;
}

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
                <View style={styles.subInfoContainer}>
	               <Text style={styles.publisher}>{this.props.news.publisher} </Text>
	               <Text style={styles.pubDate}>
                  {formatPubDate(this.props.news.pubDate)}
                  </Text>
                </View>
	            </View>
	          </View>
	        </TouchableHighlight>
          <View style={styles.cellBorder} />
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
    marginLeft: 10,
    justifyContent: 'flex-start',

  },
  title: {
    fontSize : 16,
    textAlign: 'left',
    //backgroundColor: '#cccccc',
  },
  subInfoContainer: {
    flexDirection: 'row',
  },
  publisher: {
    flex: 1,
    textAlign: 'left'
  },
  pubDate: {
    flex: 1,
    textAlign: 'right'
  },
  thumbnail: {
    width: 80,
    height: 80,
  },

  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },

});


module.exports = NewsCell;