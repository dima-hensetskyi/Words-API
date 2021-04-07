import React, { Component } from 'react';

class WordsList extends Component {
  render() {
    return (
      <div>
        {this.props.wordslist.map((word, i) => (
          <p key={i}>{word.text}</p>
        ))}
      </div>
    );
  }
}

export default WordsList;
