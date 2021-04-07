import React, { Component } from "react";
import {connect} from "react-redux";
import deleateWord from "../../../redux/actions/deleate-words-action";
import updateWord from "../../../redux/actions/update-word-action";

class PostsItem extends Component {

    state = {
        post: this.props.word.post
    }

    submitDesc = e => {
        const value = e.target.value
        this.setState({post: value})
    }

    clickToEdit = () => {
        const data = {
            post: this.state.post
        }
        this.props.updateWord(`http://localhost:4004/words/${this.props.word._id}`, data)   
    }
    clickDelete = () => {

        this.props.deleateWord(`http://localhost:4004/words/${this.props.word._id}`)

        window.location.reload()

    }
    

    render() {

        const { word } = this.props;
        const { post } = this.state;

        return(
            <div className="word-cart">
                <h4>{ word.text }</h4>
                <textarea defaultValue={post}
                          cols="30"
                          rows="10"
                          onChange={this.submitDesc}
                ></textarea>
                <div>
                    <button onClick={this.clickToEdit}>Save</button>
                    <button onClick={this.clickDelete}>Delete</button>
                </div>
            </div>
        )
    }

}

const getDispatchToProps = dispatch => {
    return {
        updateWord: (url, data) => dispatch(updateWord(url, data)),
        deleateWord: (url) => dispatch(deleateWord(url))
    }
}

export default connect(null, getDispatchToProps)(PostsItem);

