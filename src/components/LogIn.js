import React, { Component } from 'react'

export default class LogIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            AllCards:[1,1,1,1,
                2,2,2,2,
                3,3,3,3,
                4,4,4,4,
                5,5,5,5,
                6,6,6,6,
                7,7,7,7,
                8,8,8,8,
                9,9,9,9,
                10,10,10,10,
                11,11,11,11,
                12,12,12,12,
                13,13,13,13],
             name:"",
             computerCards:[],
             playerCards:[],
        }
    }
 
    NameOfPlayer=(n)=>{
        this.setState({ name:n.target.value })
        this.props.name(this.state.name)  
    }
    CheckTheName=()=>{
        if(this.state.name.length > 0){
            let n = this.state.name
            this.props.name(n)  
        }
        else{
            let x="unknown"
            this.props.name(x)
        }
    }
    changeFlagValue=()=>{
        this.props.flagStatus(1)
        this.CheckTheName()
    }

    render() {
        return (
            <div className="logindiv">
            <h1 className="wartitle">Ready for war</h1>
            <input className="namelocation" onChange={this.NameOfPlayer} placeholder="Enter your name"/>
            <br/>
            <br/>
             <button className="btn btn-secondary" onClick={this.changeFlagValue}>Start</button>
            </div>
        )
    }
}
