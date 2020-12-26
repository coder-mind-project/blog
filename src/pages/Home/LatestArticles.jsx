import React, {useState, useEffect} from 'react';

import {Box, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import axios from 'axios';

import ArticleCard from './ArticleCard';
import ArticleCardPlaceholder from './placeholders/ArticleCardPlaceholder';

import {LatestArticlesContainer, LatestArticlesCardContainer} from './styles';

const LatestArticles = () => {
  const [articles, setArticles] = useState([]);
  const [articlesPlaceholder] = useState([1, 2, 3, 4, 5, 6]);
  const [skip] = useState(0);
  const [limit] = useState(8);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getLatestArticles = async () => {
      setLoading(true);
      const url = `/articles/published?&skip=${skip}&limit=${limit}`;
      await axios(url).then((res) => {
        setLoad(false);
        setArticles(res.data.articles);
      });

      setLoading(false);
    };

    if (load) {
      getLatestArticles();
    }
  }, [load, loading, articles, skip, limit]);

  return (
    <LatestArticlesContainer item xs={12} md={7}>
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
              <LatestArticlesCardContainer
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
              </LatestArticlesCardContainer>
            }
          </Box>
        </Box>
      </Box>
    </LatestArticlesContainer>
  );
};

export default LatestArticles;
