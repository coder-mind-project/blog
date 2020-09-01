import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardActions,
        CardContent, CardMedia, Button, Box } from '@material-ui/core'

import Logo from '../assets/img_not_found_768.png'

const useStyles = makeStyles({
    card: {
        width: 345,
        margin: 15,
    },
    media: {
        minHeight: 180,
    },
})

export default function MediaCard(props) {
    const classes = useStyles()

return (
        <Card className={classes.card}>
            <Box>
                <CardMedia
                    className={classes.media}
                    image={props.article.mediumImg || Logo}
                    title={props.article.title}
                />
                <CardContent>
                    <h3>
                        {props.article.title}
                    </h3>
                    <p>
                        {props.article.shortDescription}
                    </p>
                </CardContent>
            </Box>
            <CardActions>
                <a href={`/artigos/${props.article.customURL}`}>
                    <Button size="small" style={{color: '#8a05be'}}>
                        Ver mais
                    </Button>
                </a>
            </CardActions>
        </Card>
    )
}