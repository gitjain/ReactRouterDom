import * as React from 'react';
import * as ReactDom from 'react-dom';

import {ILabelProps} from './Label.IProps';
import '../../SCSS/App.scss';

export class Label extends React.Component<ILabelProps, undefined>{

   constructor(props: ILabelProps){
        super(props);               
    }
    render(){
        return(
            <div>
                <label>here {this.props.name}</label>
            </div>
        );
    }
    
}