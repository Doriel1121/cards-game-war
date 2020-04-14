import React, { Component } from 'react'

export default class Finish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    render() {
        return (
            <div className="finishStyle">
               <h1>{this.props.winning}</h1> 
            </div>
        )
    }
}
