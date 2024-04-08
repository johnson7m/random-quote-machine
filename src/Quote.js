import React from 'react';
import ReactDOM from 'react-dom';

export class Quote extends React.Component {
  render() {
    return (
      <div id="quote-box">
        <h2 id="text">{this.props.quote}</h2>
        <p id="author">{this.props.author}</p>
      </div>
    )
  };
}