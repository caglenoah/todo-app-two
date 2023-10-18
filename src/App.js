import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      text: "",
      isClicked: false
    };

  }
    
  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      todos: [...this.state.todos, this.state.text], 
      text: ""

    })
  }


  render() {
    return (
      <div className='App'>
        Enter a Todo: <input type='text' onChange={this.handleChange} value={this.state.text} />
        <button onClick={this.handleSubmit}>Add Todo</button>

        <ul>
          {this.state.todos.map((todo) => {
            return <li>{todo}</li>
          })}
        </ul>

        {/* <h1>{this.state.isClicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me</button> */}
      </div>
    );
  }
}
export default App;