import * as React from 'react';

export interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
    isRequired ?: boolean;
    name: string;

}