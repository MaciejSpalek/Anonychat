import React from 'react';
import {Spinner as Loader} from 'react-bootstrap';

const Spinner = () => {
    return (
        <Loader 
            animation="border" 
            role="status" 
            style={{
                color: "#FF4643", 
                width: "3.5rem", 
                height: "3.5rem"
            }} 
        />
    )
}

export default Spinner;
