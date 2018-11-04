///Each digit has 7 segments 

import React from 'react';
import VSegment from './VSegment';
import HSegment from './HSegment';
import { convertDigitsToSegment } from './digitsHelper';

import css from './DisplayStyles.css';

const RenderDigit = (number) => {
        if(isNaN(number)) return null;
        
        const segment = convertDigitsToSegment(number);
        
        const segments = [<VSegment isOn={segment["f"]} key="f" className="segment F" />,
        <VSegment isOn={segment["b"]} key="b" className="segment B" />,
        <VSegment isOn={segment["e"]} key="e" className="segment E" />,
        <VSegment isOn={segment["c"]} key="c"  className="segment C"/>,
        <HSegment isOn={segment["a"]} key="a" className="segment A"/>,
        <HSegment isOn={segment["g"]} key="g" className="segment G"/>,
        <HSegment isOn={segment["d"]} key="d" className="segment D" />
        ];

        // for (var key in segment) {
        //     if (segment.hasOwnProperty(key)) {
        //         const isOn = segment[key];
        //         segments.push(<VSegment isOn={isOn} key={key} />)
        //     }
        // }
        return segments;
    
}

const Digit = ({ number }) => {
    return (
        <div className="gapA">
            {RenderDigit(number)}
        </div>
    )
}

export default Digit;
