import React from 'react'

import { Grid, Box, useMediaQuery } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags, faStar } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles'

import { api_cm_management } from '../config/appConfig'
import { Link } from 'react-router-dom'

import {styles} from './styles/ArticleBox'
import Rating from 'react-rating'

const useStyles = makeStyles(styles)

const ArticleBox = props => {
    
    const classes = useStyles()
    const matches = useMediaQuery('(max-width: 1055px)')

    return (
        <Box width="100%" className={classes.articleBox}>
            <Grid item xs={12} md={3} className={classes.articleImg}>
                <figure>
                    { props.article && props.article.smallImg && <img src={`${api_cm_management}/${props.article.smallImg}`} className={classes.logoArticle} 
                    
                    alt={props.article.title}/>}
                </figure>
            </Grid>
            <Grid item xs={12} md={8} className={matches ? classes.articleContentXs : classes.articleContent}>
                <Box>
                    <h2 className={classes.title}>
                        <Link to={`/artigos/${props.article.customURL}`} className={matches ? classes.linkXs : classes.link}>
                            {props.article.title}
                        </Link>
                    </h2>
                    { props.article.boosted && 
                        <Box display="flex" flexDirection="column" alignItems={matches ? 'center' : 'flex-start'}>
                            <small>Assuntos do momento</small>
                            <Rating 
                                placeholderRating={5}
                                readonly
                                placeholderSymbol={(<FontAwesomeIcon icon={faStar} color="yellow" />)}
                                emptySymbol={(<FontAwesomeIcon icon={faStar} color="gray" />)}
                            /> 
                        </Box>
                    }
                    <p className={matches ? classes.textXs : ''}>
                        {props.article.shortDescription}
                    </p>
                    <p className={matches ? classes.textXs : ''}>
                        {props.article.longDescription}
                    </p>
                </Box>
                <Box display="flex" alignItems="center" justifyContent={matches ? 'center':'flex-start'}  width="100%">
                    <Box display="flex" alignItems="center">
                        <Box mr={1}>
                            <FontAwesomeIcon icon={faTag} />
                        </Box> 
                        {props.article.theme.name}
                    </Box>
                    { props.article.category && props.article.category._id && 
                        <Box display="flex" flexWrap="wrap" ml={2} alignItems="center">
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faTags} />
                            </Box>
                            {props.article.category.name}
                        </Box>
                    }
                </Box>
            </Grid>
        </Box>
    ) 
}

export default ArticleBox