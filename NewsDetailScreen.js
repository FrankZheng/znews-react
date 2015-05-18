var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var ARTICLE_URL = "http://xnewsreader.herokuapp.com/article/";
var ARTICLE_ID = "555874e02e3ce90300162f0f";


var NewsDetailScreen = React.createClass({
	getInitialState : function() {
		return { 
			article : null,
		}
	},

	fetchData: function(articleId) {
		var url = ARTICLE_URL + articleId + "?output=json";
		fetch(url)
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({
				article : responseData.text,
			});
		})
		.done();

	},

	componentDidMount: function() {
		//this.fetchData(this.props.articleId);
		this.fetchData(ARTICLE_ID);
	},

	renderLoadingView: function() {
		return (
			<View style={styles.container}>
				<Text>
					Loading news detail...
				</Text>
			</View>
		);
	},

	render: function() {
		if(!this.state.article) {
			return this.renderLoadingView();
		}

		return (
			<ScrollView style={styles.container}>
				<Text style={styles.text}>{this.state.article}</Text>
			</ScrollView>
		);
	},
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	text: {
		fontSize : 16,
    	textAlign: 'left',
    	margin: 5,
	},

});



module.exports = NewsDetailScreen