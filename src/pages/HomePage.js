import React from 'react';
import {Button} from '@material-ui/core';

export default class HomePage extends React.Component {
    render(){
        return(
            <div> 
                <div>
                    Immibytes - Welcomes you.. Site Construction inprogress
                </div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}