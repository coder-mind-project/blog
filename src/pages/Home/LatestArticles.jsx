import React, {useState, useEffect} from 'react';

import {Grid, Box, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';

import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './placeholders/ArticleCardPlaceholder';
import {styles} from './styles/LatestArticles';

const useStyles = makeStyles(styles);

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [articlesPlaceholder] = useState([1, 2, 3, 4, 5, 6]);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();


  useEffect(() => {
    const getLatestArticles = async () => {
      setLoading(true);
      const url = `/articles`;
      await axios(url).then((res) => {
        setLoad(false);
        setArticles(res.data.articles);
      });

      setLoading(false);
    };

    if (load) {
      getLatestArticles();
    }
  }, [load, loading, articles]);

  return (
    <Grid item xs={12} md={7} className={classes.latestArticlesGrid}>
      <Box display="flex" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center" flexWrap="wrap"
          >
            <Typography component="h2" variant="h4">
              Publicações mais recentes
            </Typography>
            <Typography component="small" variant="body2">
              Confira o que há de mais recente...
            </Typography>
          </Box>
          <Box mt={3} mb={3} width="100%">
            { loading &&
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  {articlesPlaceholder.map((elem) =>
                    (
                      <ArticleCardPlaceholder key={elem} />
                    ),
                  )}
                </Box>
            }
            { !loading && Boolean(articles.length) &&
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
              >
                {articles.map((article) =>
                  (
                    <Link
                      key={article.uri}
                      to={`/artigos/${article.uri}`}
                      className="fake-link"
                    >
                      <ArticleCard article={article} />
                    </Link>
                  ),
                )}
              </Box>
            }
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default LatestArticles;
