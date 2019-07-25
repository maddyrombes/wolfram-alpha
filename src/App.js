import React from 'react';
import './App.css';
import { fetchData } from './api-helper.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    this.getTheData()
  }

  getTheData = async () => {
    const data = await fetchData()
    console.log(data.data)
  }


  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}

