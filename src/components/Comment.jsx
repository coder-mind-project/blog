import React, { Component } from 'react'
import { Box, Divider, Button } from '@material-ui/core'

import './css/Comment.css'
import Answer from './Answer.jsx'

class Comment extends Component {

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
                    <Box mr={1} className="comment">
                        <strong>{this.props.comment.userName}</strong>
                    </Box>
                    <Box mr={1}>
                        <small>{this.formatDate(this.props.comment.createdAt)}</small>
                    </Box>
                </Box>
                <Box p={1} className="comment">
                    {this.props.comment.comment}
                </Box>
                <Box p={1}>
                    {this.props.comment.answers && 
                        <Button color="secondary" variant="text" size="small" onClick={() => this.setState({displayComments: !this.state.displayComments})}>
                            {this.state.displayComments ? 'Ocultar respostas' : 'Ver respostas'}
                        </Button>
                    }
                </Box>
                { this.state.displayComments && this.props.comment.answers &&
                    <Box p={3} className="comment">
                        { this.props.comment.answers.map(answer => 
                            ( <Answer answer={answer} key={answer._id} /> )) 
                        }
                    </Box>
                }
                
                <Divider/>
            </Box>
        )
    }
}

export default Comment;