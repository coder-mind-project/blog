import React, { Component } from 'react'
import { Slide, Fab, Icon, useScrollTrigger, Box } from '@material-ui/core'

import './css/FloatingButton.css'
const Float = (props) => {

    const {window, action} = props

    const trigger = useScrollTrigger({target: window ? window() : undefined, disableHysteresis: true})
    
    return trigger ? (
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                <Fab className={"floatingButton defaultButtonColor"} 
                    onClick={action}>
                    <Icon>{props.icon || 'keyboard_arrow_up'}</Icon>
                </Fab>
        </Slide>
    ) : null
}

class FloatingButton extends Component {
    render() { 
        return ( <Box><Float action={this.props.action} icon={this.props.icon} /></Box> )
    }
}

export default FloatingButton