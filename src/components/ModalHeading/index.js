import React from 'react';
import { Heading } from './modalHeading-styles';

const ModalHeading = ( {text, color} ) => {
    return (
        <Heading color={color}>
            {text}
        </Heading>
    )
};

export default ModalHeading;