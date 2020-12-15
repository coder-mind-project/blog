import React, {useState, useEffect} from 'react';

import {Grid, Box, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';

import ArticleCardPlaceholder from './placeholders/ArticleCardPlaceholder';

import ArticleCard from './ArticleCard';
import {styles} from './styles/BoostedArticles';

const useStyles = makeStyles(styles);

const BoostedArticles = () => {
  const [boostedArticles, setBoostedArticles] = useState([]);
  const [articlesPlaceholder] = useState([1, 2, 3, 4]);
  const [skip] = useState(0);
  const [limit] = useState(4);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const getBoostedArticles = async () => {
      setLoading(true);
      const url = `/articles/boosted?skip=${skip}&limit=${limit}`;
      await axios(url).then((res) => {
        setLoad(false);
        setBoostedArticles(res.data.articles);
      });

      setLoading(false);
    };

    if (load) {
      getBoostedArticles();
    }
  }, [load, loading, boostedArticles, skip, limit]);

  return (
    <Grid item xs={12} md={5} className={classes.boostedArticlesGrid}>
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
              Melhores publicações
            </Typography>
            <Typography component="small" variant="body2">
              Primeira leitura? Aqui vai umas sugestões...
            </Typography>
          </Box>
          <Box width="100%">
            { loading &&
                <Box
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  {articlesPlaceholder.map((elem) =>
                    (
                      <ArticleCardPlaceholder
                        key={elem}
                        rectWidth={175}
                        rectHeight={175}
                      />
                    ),
                  )}
                </Box>
            }
            { !loading && Boolean(boostedArticles.length) &&
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                {boostedArticles.map((article) =>
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

export default BoostedArticles;
