import React from 'react';
import {Grid, Box, Typography, makeStyles} from '@material-ui/core';
import DefaultImg from '../../assets/img_not_found_768.png';
import {styles} from './styles/ArticleCard';

const useStyles = makeStyles(styles);

const ArticleCard = (props) => {
  const {article} = props;

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Box className={classes.cardContainer}>
        <Box display="flex" justifyContent="center">
          <img
            src={ article.logoImg || DefaultImg}
            height="150px"
            alt={article.title}
          />
        </Box>
        <Box display="flex" justifyContent="center" height="50px">
          <Typography component="h3" variant="h6">
            {article.title}
          </Typography>
        </Box>
        {article.theme && (
          <Box display="flex" justifyContent="center">
            <Typography component="span" variant="body1">
              {article.theme.description}
            </Typography>
          </Box>
        )}
        <Box display="flex" justifyContent="center">
          <Typography component="small" variant="body2">
            {article.description}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default ArticleCard;
