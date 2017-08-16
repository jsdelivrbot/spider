import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({

  //called before render f(x)
  //object returned is assigned to this.state, use later
  getInitialState: function(){
    return { elapsed: 0 };
  },

  //called by react component, rendered on page set interval here
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 50);
  },

  componentWillMount: function(){
    clearInterval(this.timer);
  },

  tick: function(){
    this.setState({elapsed: new Date() - this.props.start});
  },

  render: function() {
    var elapsed = Math.round(this.state.elapsed / 100);

    var seconds = (elapsed / 10).toFixed(1);

    return <p><b>{ seconds }</b></p>;
  }

});

export default App;
