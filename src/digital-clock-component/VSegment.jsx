import React from 'react';

const On =(className) => <div className={className}></div>
const Off = <div>Off</div>

const VSegment = ({isOn,className}) => {   
   
    if(isOn){
        return On(className);
    }
    return null;   
}


export default VSegment;
