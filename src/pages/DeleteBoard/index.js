import React from 'react';
import { Container } from './deleteBoard-styles';
import Button from '../../components/Button';

const DeleteBoard = () => {
    return (
        <Container>
            <h2>Delete this board?</h2>
            <p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
            <Button text="Delete" fontSize="13px" backgroundColor="#EA5555" hoverColor="#FF9898" />
            <Button text="Cancel" fontSize="13px" backgroundColor="rgba(99, 95, 199, 0.1)" hoverColor="rgba(99, 95, 199, 0.25)" color="#635FC7" />
        </Container>
    )
};

export default DeleteBoard;