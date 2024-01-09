import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      count:0
    }
  } 
  increment = () => {
    console.log('incre..')
    this.setState({count:this.state.count+1})
  }
  decrement = () => {
    console.log('decre..')
    this.setState({count:this.state.count-1})
  }
  render() {
    return (
      <>
        <h1>count:{this.state.count}</h1>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    )
  }
}

/*import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state={
      date:1,
    }
  }
  componentDidMount() {
    setInterval(()=>{(
      this.setState({date:this.state.date+1})
    )},1000)
  }
  componentDidUpdate() {
    if(this.state.date==31) {
      this.state.date=1
    }
  }
  render() {
    return (
      <>
      <h1>Date:{this.state.date}</h1>  
      </>
    )
  }
}*/

