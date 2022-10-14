import React from 'react';
import { Container } from './deleteBoard-styles';
import ModalHeading from '../../components/ModalHeading';
import ModalText from '../../components/ModalText';
import Button from '../../components/Button';

const DeleteBoard = ( {heading} ) => {
    return (
        <Container>
            <ModalHeading 
                text={heading} 
                color="#EA5555" 
            />
            <ModalText 
                text="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed." 
            />
            <Button 
                text="Delete" 
                fontSize="13px" 
                backgroundColor="#EA5555" 
                hoverColor="#FF9898" 
            />
            <Button 
                text="Cancel" 
                fontSize="13px" 
                backgroundColor="rgba(99, 95, 199, 0.1)" 
                hoverColor="rgba(99, 95, 199, 0.25)" 
                color="#635FC7" 
                marginTop="16px" 
            />
        </Container>
    )
};

export default DeleteBoard;