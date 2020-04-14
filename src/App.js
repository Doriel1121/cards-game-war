import React, { Component } from 'react'
import LogIn from './components/LogIn.js';
import Game from './components/Game.js';
import Finish from './components/Finish.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default class App extends Component {

constructor(props) {
  super(props)

  this.state = {
     name:"",
     flag:2,
     winner:""

  }
}

nameOfPlayer=(n)=>{
  this.setState({name:n})
  console.log(this.state.name);
  
}
updateTheFlag=(x)=>{
  this.setState({flag:x})
  // console.log(this.state.flag);
}
updateWinner=(w)=>{
  this.setState({winner:w})
  console.log(this.state.winner);
}
show = () =>{
  if(this.state.flag == 1){
    return (
      <div>
           <Game win={this.updateWinner} flagStatus={this.updateTheFlag} Name={this.state.name}/>
      </div>
    )
  }
  else if(this.state.flag == 2){
    return (
      <div>
        <LogIn flagStatus={this.updateTheFlag} name={this.nameOfPlayer}/>
      </div>
    )
  }else{
    return(
    <div>
        <Finish winning={this.state.winner}/>
      </div>
    )
  }
}


  render() {
    return (
      <div className="App">
       {this.show()}
      </div>
    )
  }
}





