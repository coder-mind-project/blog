import React, {useState, useEffect} from 'react';
import {matchType} from '../../types';
import {
  Grid,
  Box,
  Button,
  Snackbar,
  Icon,
  IconButton,
} from '@material-ui/core';

import axios from 'axios';

import ArticlePlaceholder from './placeholders/ArticlePlaceholder';
import FloatingButton from '../../components/FloatingButton.jsx';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import ArticleComments from './ArticleComments';
import ArticleFooter from './ArticleFooter';

import {ArticleContainer} from './styles';

const Article = (props) => {
  const {match} = props;
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [load, setLoad] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const get = async () => {
      const {resource} = match.params;

      const url = `/articles/${resource}`;
      setIsLoading(true);
      await axios(url).then((response) => {
        const {data} = response;
        setArticle({...data, publishedAt: new Date(data.publishedAt)});
        setIsError(false);
      }).catch(() => setIsError(true));
      setIsLoading(false);
    };

    if (load) {
      setLoad(false);
      get();
    }
  }, [article, isLoading, load, match.params, isError]);

  return (
    <ArticleContainer>
      { isLoading &&
        <ArticleContainer>
          <ArticlePlaceholder />
        </ArticleContainer>
      }
      { !isLoading &&
        <Grid item xs={12} className="article-content">
          <ArticleHeader article={article}/>
          <ArticleContent article={article} />
          <ArticleFooter />
          <ArticleComments />
        </Grid>
      }
      { isError && !isLoading &&
        <ArticleContainer>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
            <Box display="flex" alignItems="baseline" justifyContent="center" flexDirection="column" p={2}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Box display="flex" justifyContent="center" alignItems="center" className="error-icon-area">
                  <Icon color="secondary" className="error-icon">healing</Icon>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                  <h2 className="message-error">
                    {isError ?
                                  'Artigo não encontrado, acredita que houve um problema? Clique no botão rosa para nos comunicar =D' :
                                  'Ops, ocorreu um erro ao recuperar seu artigo. Já tentou atualizar a página?'}
                  </h2>
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" width="100%" mt={3}>
                <Button color="secondary" fullWidth variant="outlined" onClick={() => window.location.reload()}>Atualizar página</Button>
              </Box>
              <Box display="flex" flexDirection="column" width="100%" mt={3}>
                <Button
                  color="secondary"
                  fullWidth
                  variant="contained"
                  onClick={() => window.location.href = '/sobre#contact'}
                >
                                Reportar bug
                </Button>
              </Box>
            </Box>
          </Box>
        </ArticleContainer>
      }
      <FloatingButton action={() => window.scrollTo(0, 0)}/>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={false}
        autoHideDuration={6000}
        onClose={null}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Comentário enviado, em 24 horas ele estará publico para outros usuários</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={null}>
                            Fechar
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={null}
          >
            <Box ml={1}>
              <Icon>clear</Icon>
            </Box>
          </IconButton>,
        ]}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(false)}
        autoHideDuration={6000}
        onClose={null}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{''}</span>}
        action={[
          <Button key="undo" color="secondary" size="small" onClick={null}>
            Fechar
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={null}
          >
            <Box ml={1}>
              <Icon>clear</Icon>
            </Box>
          </IconButton>,
        ]}
      />
    </ArticleContainer>
  );
};

Article.propTypes = {
  match: matchType.isRequired,
};

export default Article;
