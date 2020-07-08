import React, { Component } from 'react'
import Confetti from 'react-confetti';


export default class Finish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }

    AnotherTry = () => {
      this.props.flagStatus(2)
    }
    
    render() {
        if (this.props.winning.includes("win")) {
          return<div className="finishStyle">
            <Confetti 
            width={1200}
            height={650}
            />
            <h1 style={{color:"white"}}>YOU ARE THE WINNER</h1>
            <button className="btn btn-secondary" onClick={()=> this.AnotherTry()}>ONE MORE</button>
            </div>   
        
        }else{ return (
             <div className="finishStyle">
               <h1 className="winname" style={{color:"white"}}>YOU LOSE </h1> 
               <button className="btn btn-secondary" onClick= {()=> this.AnotherTry()}> Try again</button>
            </div>
        )
        }
    
    }
}
