import React, { Component } from 'react';
import NaiveBaker from './containers/NaiveBaker/NaiveBaker';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    suggestions: [
      "Carrot",
      "Butter",
      "Cheese",
      "Apple",
      "Eggs",
      "Bread",
      "Rice",
      "Oil",
      "Spinach"
    ]
  };

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  //     //var temp=this.state.suggestions;
  //     //temp.sort();
  //     //console.log(temp);
  //     //this.setState({suggestions:temp});
  //     console.log(this.state.responseToPost);

  // }

  // callApi = async () => {
  //   const response = await fetch('/users');
  //   console.log(response);
  //   const body = await response.json();
  //   console.log(body);
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();

  //   this.setState({ responseToPost: body });
  // };
  render() {
    return (
      <BrowserRouter>

        <div className="App">

          <NaiveBaker />
         
           {/* <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>  */}
        </div>
   </BrowserRouter>
    );
  }
}

export default App;
