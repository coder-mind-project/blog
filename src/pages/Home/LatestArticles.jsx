import React, {useState, useEffect} from 'react';
import {Grid, Box, Tabs, Tab, Typography, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import HotArticle from './HotArticle.jsx';
import axios from 'axios';
import Loading from '../../assets/loading.gif';
import {styles} from './styles/LatestArticles';

const useStyles = makeStyles(styles);

const BoostedArticles = () => {
  const [articles, setArticles] = useState([]);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(0);

  const classes = useStyles();

  const changeCurrentTab = (evt, tab) => {
    setCurrentTab(tab);
  };

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
    <Grid item xs={12} md={8} className={classes.latestArticlesGrid}>
      <Box display="flex" alignItems="baseline" justifyContent="center">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="baseline"
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="baseline"
            justifyContent="center" flexWrap="wrap"
          >
            <Typography component="h2" variant="h4">
              Publicações mais recentes
            </Typography>
          </Box>
          <Box mt={3} mb={3} width="100%">
            { loading &&
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                >
                  <figure className="text-center">
                    <img
                      className="loading-ellipsis"
                      src={Loading}
                      alt="Carregando..."
                    />
                    <figcaption><small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small></figcaption>
                  </figure>
                </Box>
            }
            { !loading && Boolean(articles.length) &&
                <Tabs
                  value={currentTab}
                  onChange={changeCurrentTab}
                  indicatorColor="primary"
                  textColor="inherit"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  { articles.map((article) =>
                    <Tab key={article.uri} label={(
                      <Link
                        to={`/artigos/${article.uri}`}
                        className="top-article"
                      >
                        <HotArticle article={article} />
                      </Link>
                    )}/>)
                  }
                </Tabs>
            }
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default BoostedArticles;
