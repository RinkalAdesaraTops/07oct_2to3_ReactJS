import React, { Component } from 'react'

class Classcomponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:this.props.myname,
            age:24
        }
        // this.changeName = this.changeName.bind(this)       
    }
    changeName = ()=>{
        this.setState({
            name:"jhfjfkdh"
        })
    }
  render() {    
    return (
      <div>
        <h3>Class component called...</h3>
        <h4>Name is -- {this.props.myname}</h4>
        <h4>State Name is -- {this.state.name}</h4>
      <button onClick={this.changeName}>Change Name</button>

        <h4>State Age is -- {this.state.age}</h4>
        <button onClick={()=>this.setState({age:31})}>Change Age</button>

      </div>
    )
  }
}
export default Classcomponent