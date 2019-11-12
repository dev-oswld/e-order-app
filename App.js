import axios from 'axios';
import React from 'react';
import AppNavigator from './AppNavigator';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.defaults.baseURL = 'https://dry-escarpment-18808.herokuapp.com';
    axios.defaults.timeout = 81000;
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}