import React, { Component } from 'react'

export default class Date extends Component {
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
    if(this.state.date == 31) {
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
}

