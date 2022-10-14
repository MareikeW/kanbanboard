import styled from 'styled-components';

export const ButtonContainer = styled.button`
    height: 48px;
    width: 100%;
    background-color: ${props => props.backgroundColor || '#635FC7'};
    border-radius: ${props => props.radius || "20px"};
    color: ${props => props.color || '#FFFFFF'};
    font-size: ${props => props.fontSize || '15px'};
    margin-top: ${props => props.marginTop || 0};

    &:hover {
        background-color: ${props => props.hoverColor || "#A8A4FF"};
    }
`
