import React, { Component } from 'react'

 class LifecycleClass extends Component {
    constructor(){
        console.log("constructor called...");
        
        super()
        this.state = {
            count:0,
            color:"red"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log("componentDidMount func called..");
            this.setState({
                color:"blue"
            })
        },3000)
        
    }
    static getDerivedStateFromProps(props,state){
        console.log(props);
        console.log(state);
        return null
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate called");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("prev state is");
        console.log(prevState);       
        return null
    }
    componentDidUpdate(){
        console.log("finally value updated");
        
    }
  render() {
    console.log("render called...");

    return (
      <div>
        <h3>Count is -- {this.state.count}</h3>
        <h3>Color is -- {this.state.color}</h3>
      </div>
    )
  }
}
export default LifecycleClass