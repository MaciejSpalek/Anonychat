import React from 'react';
import { StyledIcon } from './Icon.styled';
import PropTypes from 'prop-types';

const Icon = ({ icon, ...props }) => <StyledIcon icon={icon} {...props} />

export default Icon;

Icon.propTypes = {
    icon: PropTypes.object.isRequired,
}
