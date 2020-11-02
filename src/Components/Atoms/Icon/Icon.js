import React from 'react';
import { StyledIcon } from './Icon.styled';

const Icon = ({ icon, ...props }) => <StyledIcon icon={icon} {...props} />

export default Icon;