import React, { Component } from 'react'
import DeniedMessage from '../components/DeniedMessage';
import Recoder from '../components/Recoder';

class App extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      status: 'prompt'
    }
  }

  componentDidMount() {
    navigator.permissions.query({name:'microphone'}).then(result => {
      console.log(result)
      this.setState({
        status: result.state
      })

      result.onchange = e => {
        console.log('changed', e)
        this.setState({
          status: e.currentTarget.state
        })
      };
    });
  }

  render() {
    const { status } = this.state

    switch(status) {
      case 'denied':
        return <DeniedMessage />

      case 'granted':
      case 'prompt':
      default:
        return <Recoder />
    }
  }
}

export default App