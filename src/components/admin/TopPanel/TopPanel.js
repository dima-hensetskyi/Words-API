import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import saveWords from '../../../redux/actions/save-words-action';

class TopPanel extends Component {
	render() {
		return (
			<div className="top-panel">
				<Link to="">WordExtractionAdmin</Link>
				<button onClick={this.props.saveWords}>Save</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveWords: () => dispatch(saveWords('http://localhost:4004/words')),
	};
};

export default connect(null, mapDispatchToProps)(TopPanel);
