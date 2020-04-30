import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, color, fontSize }) => {
    return (
        <FontAwesomeIcon icon={icon} style={{fontSize, color}}/>
    )
}

export default Icon;