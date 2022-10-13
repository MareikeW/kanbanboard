import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: 48px;
    width: 174px;
    background-color: ${props => props.backgroundColor || '#635FC7'};
    border-radius: ${props => props.radius || "20px"};
    color: ${props => props.color || '#FFFFFF'};
    font-size: ${props => props.fontSize || '15px'};

    &:hover {
        background-color: ${props => props.hoverColor || "#A8A4FF"};
    }
`
