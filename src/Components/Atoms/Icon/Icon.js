import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, ...props }) => <FontAwesomeIcon icon={icon} {...props} />

export default Icon;