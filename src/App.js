import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        quote: '',
      }
      this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ quote: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.quote}</h1>
          <button className="button" onClick={this.fetchQuote}>
            <span>GIVE ME ANOTHER!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;