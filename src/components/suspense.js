import React, { Component } from 'react'

export default class suspense extends Component {
    constructor(props){
        super(props);
        this.state={name:"Amazon"}
    }
    componentDidMount(){
        setTimeout(()=>{

        })
    }
  render() {
    return (
      <div>
        Hi BRother man
      </div>
    )
  }
}
