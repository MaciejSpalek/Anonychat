import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, color, fontSize, padding }) => {
    return (
        <FontAwesomeIcon icon={icon} style={{fontSize, color, padding}}/>
    )
}

export default Icon;