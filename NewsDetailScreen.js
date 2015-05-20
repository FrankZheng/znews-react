'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var LoadingView = require('./LoadingView');

var ARTICLE_URL = "http://xnewsreader.herokuapp.com/article/";

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
		this.fetchData(this.props.news._id);
	},

	renderLoadingView: function() {
		return (
			<LoadingView
				message="Loading news detail..."
			/>
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
		fontSize: 16,
		lineHeight: 18, //a larger value, like 20 will make too long text disappear.
		textAlign: 'left',
    	margin: 8,
	},

});



module.exports = NewsDetailScreen