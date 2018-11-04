import React, { Component } from 'react';
import Display from './Display';
class DigitalClock extends Component {
    constructor(props){
        super(props);
        this.state= {
            time:{},
            intervalId:undefined
        }
        this.getTime = this.getTime.bind(this);
        
    }

    componentDidMount(){
       const intervalId =  setInterval(this.getTime,1000)
       this.setState({
        intervalId
    })
    }
    getTime(){
       //TODO refactor
        const date = new Date();        
        const hours = date.getHours();
        if (hours < 10){
            var hours1 = '0';
            var hours2=hours.toString();
        }
        else{
            var splitHours = hours.toString().split('');
            var [hours1,hours2] = splitHours;            
        }
        
        const minutes = date.getMinutes();
        if (minutes < 10){
            var minutes1 = '0';
            var minutes2=minutes.toString();
        }
        else{
            var splitMinutes = minutes.toString().split('');
            var [minutes1,minutes2] = splitMinutes;            
        }

        const seconds = date.getSeconds();
        if (seconds < 10){
            var seconds1 = '0';
            var seconds2=seconds.toString();
        }
        else{
            var splitSeconds = seconds.toString().split('');
            var [seconds1,seconds2] = splitSeconds;         
              
        }
        this.setState({
            time: {
                hours1:hours1,
                hours2:hours2,
                minutes1:minutes1,
                minutes2:minutes2,
                seconds1:seconds1,
                seconds2:seconds2
            }
        })

    }
    componentWillUnmount(){
        clearInterval(this.state.intervalId);
    }


    render() {
       const timeZ = {
        hours1:"0",
        hours2:"5",
        minutes1:"6",
        minutes2:"7",
        seconds1:"8",
        seconds2:"9"
       }
        return (
            <Display time= {this.state.time}/>
            //  <Display time= {timeZ}/>
        );
    }
}

export default DigitalClock;
