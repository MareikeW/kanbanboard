import React from 'react';
import { ButtonContainer } from './button-styles';

const PrimaryButton = ({ text, fontSize, backgroundColor, hoverColor, radius, color }) => {
    return (
        <ButtonContainer fontSize={fontSize} backgroundColor={backgroundColor} hoverColor={hoverColor} radius={radius} color={color}>
            {text}
        </ButtonContainer>
    )
};

export default PrimaryButton;