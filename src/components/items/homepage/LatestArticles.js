import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 10,
        boxShadow: '0px 0px 3px 1px #999'
    },
    cardFixed:{
        width: 345,
        margin: 10,
        boxShadow: '0px 0px 3px 1px #999' 
    },
    media: {
        height: 140,
    },
    articleDescription: {
        minHeight: 50
    }
});

const LastestArtciles = (props) =>  {
    const classes = useStyles();
    const widthFixedSm = useMediaQuery('(min-width: 768px)')
    const widthResponsiveXs = useMediaQuery('(min-width: 565px)')

    return (
        <Card className={!widthFixedSm && !widthResponsiveXs ? classes.card : classes.cardFixed}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.img || 'https://i.imgur.com/2XlZ9Vs.png'}
                title={props.titleImg || 'Imagem não encontrada'}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title || 'Título não gerado'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" className={classes.articleDescription}>
                    {props.description || 'Descrição não definida'}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Saiba mais
                </Button>
            </CardActions>
        </Card>
    );
}

export default LastestArtciles