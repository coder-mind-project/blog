import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';

import DefaultImg from '../../assets/img_not_found_768.png';

import {styles} from './styles/ArticleCard';
import {articleType} from '../../types';

const useStyles = makeStyles(styles);

const ArticleCard = (props) => {
  const {article} = props;

  const classes = useStyles();

  return (
    <Card className={classes.cardContainer} variant="outlined">
      <CardContent>
        <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
          <img
            src={article.logoImg || DefaultImg}
            height="150px"
            alt={article.title}
          />
        </Box>
        <Divider />
        <Typography variant="h5" component="h2">
          {article.title}
        </Typography>
        <Typography color="textSecondary">
          {article.theme && article.theme.description}
        </Typography>
        <Typography variant="body2" component="p" className="overflow-ellipsis">
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ArticleCard.propTypes = {
  article: articleType.isRequired,
};

export default ArticleCard;
