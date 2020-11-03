import React from 'react';
import { StyledSpinner } from './Spinner.styled';

const Spinner = () => {
    return (
        <StyledSpinner 
            animation="border" 
            role="status" 
        />
    )
}

export default Spinner;
