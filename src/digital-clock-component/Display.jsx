import React from 'react';
import Digit from './Digit';

import './DisplayStyles.css';


const Display = ({time}) => { 
    //{hour1,hour2,minute1,minute2,second1,second2}
    
    const {hours1,hours2,minutes1,minutes2,seconds1,seconds2} = time;
 
   
    return (
       <div className="display">
        <table>
            <tbody>
            <tr>
                <td><Digit number={parseInt(hours1,10)}/></td>
            
                <td><Digit number={parseInt(hours2,10)}/></td>
           
                <td><Digit number={parseInt(minutes1,10)}/></td>
           
                <td><Digit number={parseInt(minutes2,10)}/></td>
            
                <td><Digit number={parseInt(seconds1,10)}/></td>
            
                <td><Digit number={parseInt(seconds2,10)}/></td>
            </tr>
            </tbody>
        </table>
        
            {/* <Digit number={parseInt(hours1,10)}/> */}
            {/* <Digit number={parseInt(hours2,10)}/>
            <Digit number={parseInt(minutes1,10)}/>
            <Digit number={parseInt(minutes2,10)}/>
            <Digit number={parseInt(seconds1,10)}/>
            <Digit number={parseInt(seconds2,10)}/> */}
        </div>
    );
}

export default Display;
