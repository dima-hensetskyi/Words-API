import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopPanel from '../TopPanel/TopPanel';
import LeftPanel from '../LeftPanel/LeftPanel';
import getToWordsCollections from '../../../redux/actions/get-to-words-actions';
import PostsItem from './PostItem';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	componentDidMount() {
		const url = 'http://localhost:4004/words';
		this.props.getToWordsCollections(url);
	}

	render() {
		return (
			<div>
				<TopPanel />
				<div className="admin-page">
					<LeftPanel />
					<div className="content">
						{this.props.words.map((word, index) => (
							<PostsItem key={index} word={word}></PostsItem>
						))}
					</div>
				</div>
			</div>
		);
	}
}

const getStateToProps = (state) => {
	return {
		words: state.getToWordsReducer,
	};
};

const getDispatchToProps = (dispatch) => {
	return {
		getToWordsCollections: (url) => dispatch(getToWordsCollections(url)),
	};
};

export default connect(getStateToProps, getDispatchToProps)(Posts);
