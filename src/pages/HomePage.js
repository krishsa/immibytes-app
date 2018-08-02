import React from 'react';
import {Button} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class HomePage extends React.Component {
    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        return(
            <div> 
                <div>
                    Immibytes - Welcomes you.... Site Construction inprogress
                 
                </div>
                
                <Button 
                variant="contained" color="primary"
                aria-owns = {anchorEl? 'simple-menu' : null} 
                aria-haspopup= "true" 
                onClick = {this.handleClick} >

                    OpenMenu

                </Button>
                <Menu 
                    id="simple-menu"
                    anchorEl = {anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                 >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}