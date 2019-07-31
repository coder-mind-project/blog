import React, { Component } from 'react'

import { Grid, Box } from '@material-ui/core'
import Image from 'material-ui-image'

import './css/HotArticle.css'


class HotArticle extends Component {

    article = this.props.article

    render() { 
        return (
            <Grid item xs={12}>
                <Box display="flex" flexDirection="column" alignItems="space-between" width="250px" height="300px">
                    <Box display="flex" justifyContent="center">
                        <img src={`http://localhost:3001/${this.article.smallImg}`}  height="150px" alt={this.article.title} />
                    </Box>
                    <Box display="flex" justifyContent="center" height="50px">
                        <h4>
                            {this.article.title}
                        </h4>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <small><strong>{this.article.theme.name}</strong></small>
                    </Box>
                </Box>
            </Grid>
        )
    }
}

export default HotArticle;