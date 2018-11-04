import React from 'react';

const On =(className) => <div className={className}></div>
const Off = <span>Off</span>

const HSegment = ({isOn,className}) => {   
    if(isOn){
        return On(className);
    }
    return null;   
}


export default HSegment;
