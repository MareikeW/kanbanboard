import React from 'react';
import { Item, InputField, DeleteItemButton } from './listItem-styles';
import {ReactComponent as Cross} from "../../assets/icon-cross.svg";

const ListItem = () => {
    return (
        <Item>
            <InputField type="text" name="add" placeholder="e.g. Todo" />
            <DeleteItemButton><Cross /></DeleteItemButton>
        </Item>
    )
};

export default ListItem;