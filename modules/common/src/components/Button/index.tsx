import React from 'react';
import { Button as MuiButton } from '@material-ui/core';


interface IProps {
    text: string;
}

export const Button = ({ text }: IProps) => {
    return (
        <MuiButton color='primary'>{text}</MuiButton>
    );
};