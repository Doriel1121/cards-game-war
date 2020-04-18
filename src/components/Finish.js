import React, { Component } from 'react'
import Confetti from 'react-confetti';


export default class Finish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        if (this.props.winning.includes("win")) {
          return<div className="finishStyle">
            <Confetti 
            width={1200}
            height={650}
            
            />
            <h1 style={{color:"white"}}>{this.props.winning}</h1> 
          </div>   
        
        }else{ return (
             <div className="finishStyle">
              <Confetti 
            width={1200}
            height={650}
            
            />
               <h1 className="winname" style={{color:"white"}}>{this.props.winning}</h1> 
            </div>
        )
        }
    
    }
}
