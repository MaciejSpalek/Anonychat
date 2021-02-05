import React from 'react';
import Icon from 'Components/Atoms/Icon';
import { StyledButton } from './IconButton.styled';
import PropTypes from 'prop-types';

const IconButton = ({ 
    onClick, 
    isDisabled, 
    icon,
    ...props
}) => {
    return (
        <StyledButton onClick={onClick} disabled={isDisabled} {...props}>
            <Icon icon={icon} />
        </StyledButton>
    )
};

export default IconButton;

IconButton.propTypes = {
    onClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    icon: PropTypes.object
}