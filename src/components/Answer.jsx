import React, { Component } from 'react'
import { Box, Icon } from '@material-ui/core'

import './css/Comment.css'

class Answer extends Component {

    state = {
        displayComments: false,
    }

    formatDate(date){
        const aux = date.split('T')
        let dayMonthYear = aux[0].split('-')
        dayMonthYear = `${dayMonthYear[2]}/${dayMonthYear[1]}/${dayMonthYear[0]}`
        
        let hours = aux[1].split('.')[0]

        return `${dayMonthYear} - ${hours}`
    }

    render() { 
        return ( 
            <Box width="100%" display="flex" flexDirection="column" mt={2} mb={2}>
                <Box width="100%" display="flex" flexWrap="wrap" alignItems="center">
                    <Box mr={1} display="flex" alignItems="center" className="comment">
                        { this.props.answer.article.author.email === this.props.answer.userEmail && 
                            <Icon fontSize="small" color="secondary">star</Icon>
                        }
                        <strong>{this.props.answer.userName}</strong>
                    </Box>
                    <Box mr={1}>
                        <small>{this.formatDate(this.props.answer.createdAt)}</small>
                    </Box>
                </Box>
                <Box>
                
                </Box>
                <Box p={1} className="comment">
                    {this.props.answer.comment}
                </Box>
            </Box>
        )
    }
}

export default Answer