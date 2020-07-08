import React, { Component } from 'react';
import Card from 'react-playing-card';



export default class Game extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            win:undefined,
            NameOfPlayer:props.Name,
            // {card= "A" , symbol="S"}
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
            playerrandomNuber:0,
            computerRandomCard:0,
            
            countercomp:0,
            counterplayer:0,
            playerindex:0,
            computerindex:51,
            click:0
        }
    }
 
    revealCard=(all)=>{
       var x,y,i
       let clicker=this.state.click
       if (this.state.AllCards[0]!==1&& this.state.AllCards[51]!==13&& clicker!==26) {
        console.log("in");
        
        clicker++
       this.setState({click:clicker , AllCards:all})
            // this.setState({AllCards:all})
            console.log(this.state.AllCards);
            var playerlocation=this.state.playerindex
            var complocation=this.state.computerindex
                 this.setState({playerrandomNuber:this.state.AllCards[playerlocation]})
                playerlocation=playerlocation+1
                this.setState({playerindex:playerlocation})
                this.setState({computerRandomCard:this.state.AllCards[complocation]}) 
                complocation=complocation-1                
                this.setState({computerindex:complocation})          
                 console.log(this.state.playerindex);
                 if (this.state.playerrandomNuber>this.state.computerRandomCard) {
                     let count1 = this.state.counterplayer
                    count1++
                    this.setState({counterplayer:count1})
                 }else if(this.state.computerRandomCard>this.state.playerrandomNuber){
                 let count2=this.state.countercomp
                 count2++
                 this.setState({countercomp:count2})
                 }
       }else{
      
        for(i=all.length-1; i>0;i--){
            x=Math.floor(Math.random()*(i+1))
            y=all[i]
            all[i]=all[x]
            all[x]=y
        }
       }
    }
    changeFlagValue=()=>{
        console.log(this.state.click);
        if (this.state.click==26) {
            this.props.flagStatus(3) 
        }
        console.log(this.state.counterplayer);
    }

 whowin=()=>{
    
    if (this.state.counterplayer > this.state.countercomp) {
        let title="you win"
        this.props.win(title)
    }
    else{
        let title="you lose"
        this.props.win(title)
    } 
    this.changeFlagValue()
 }
    
    render() {
        return (
            <div className="container game">
                <div className="row">
                <div className="col-2"></div>
                <div className="col-3"><h2 className="computertitle">Computer</h2></div>
                <div className="col-7"></div>
                
                <div className="col-3"></div>
                <div id="cardd" className="col-2"><Card rank={this.state.computerRandomCard} suit="S" /> </div>
                <div className="col-7"></div>

                <div className="col-7"></div>
                <div id="cardd" className="col-2"> <Card rank={this.state.playerrandomNuber} suit="S" />  </div>
                <div className="col-2"><button className="btn btn-secondary" onClick={()=>this.revealCard(this.state.AllCards)} >Reveal</button><br/><br/>
                <button className="btn btn-warning" onClick={this.whowin}>See who won</button></div>

                <div className="col-7"></div>
                <div className="col-3"><h1 className="playertitle">{this.state.NameOfPlayer}</h1></div>
                <div className="col-2"></div>

                <div className="col-12"> </div>
                </div>
            </div>
        )
    }
}
