import React from 'react'
import { Quote } from './Quote.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      quote: '',
      author: '',
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.handleChange();
  }

  handleChange() {
    this.setState({
      loading: true,
      error: null,
    });

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        this.setState({
          quote: data.content,
          author: data.author,
          loading: false,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error,
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Random Quote Machine</h1>
        <Quote onChange={this.handleChange} quote={this.state.quote} author={this.state.author} />
        <p id="sub-text">Did you like your quote?</p>
        <button onClick={this.handleChange} id="new-quote">New Quote?</button>
        <button id="tweet-quote"><a href="twitter.com/intent/tweet" target="_blank">Tweet Quote!</a></button>
      </div>
    );
  }
}


export default App;




