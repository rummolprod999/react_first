import React from 'react';
import logo from './logo.svg';
import './App.css';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), name: "Tom"};
  }

  componentDidMount() {
    this.timerId = setInterval(
        ()=> this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
        <div>
          <h1>Привет, {this.state.name}</h1>
          <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
  }
}

export default Hello;
