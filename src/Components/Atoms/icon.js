import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ 
    icon, 
    color, 
    fontSize, 
    padding, 
    margin 
}) => {
    return (
        <FontAwesomeIcon 
            icon={icon} 
            style={{ fontSize, color, padding, margin }}
        />
    )
}

export default Icon;