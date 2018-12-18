import React, { Component } from 'react'

import Counter from '../components/Counter'

class App extends Component {
  constructor() {
    super()
    this.state = { count: 0 }

    // One way to scope 'this' properly
    // this.increment = this.increment.bind(this)
  }

  // Corresponds to lines 8 & 9
  // increment() {
  //   this.setState({count: this.state.count + 1 })
  // }

  decrement = () => {
    this.setState({count: this.state.count - 1 })
  }
  increment = () => {
    this.setState({count: this.state.count + 1 })
  }
  render() {
    return <Counter
              decrement={this.decrement} 
              count={this.state.count}
              increment={this.increment}
            />
  }
}
export default App