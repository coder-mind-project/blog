import React, {useState, useEffect} from 'react';
import {matchType} from '../../types';
import {
  Grid,
  Box,
  Divider,
  Button,
  Snackbar,
  Icon,
  IconButton,
} from '@material-ui/core';

import axios from 'axios';

import Avatar from 'react-avatar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faTag,
  faTags,
  faCommentDots,
  faPaperclip,
  faShareAlt,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import FloatingButton from '../../components/FloatingButton.jsx';

import '../css/Article.css';

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
        setArticle(response.data);
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
    <Grid className="article-wrapper">
      { article && !isLoading &&
        <Grid item xs={12} className="article-content">
          <Grid item xs={12} className="article-title">
            <h1>{article.title}</h1>
          </Grid>
          <Grid item xs={12} className="article-short-description">
            <h2 className="short-description">{article.description}</h2>
          </Grid>
          <Grid item xs={12} className="header-hud-bar">
            <Box display="flex" justifyContent="center" alignItems="center" mr={1} ml={1}>
              <Box mr={1} display="flex" alignItems="center">
                <Avatar
                  src={`${article.author && article.author.profilePhoto}`}
                  name={article.author && article.author.name} size={30} round={true}/>
              </Box>
            </Box>
            {article.theme && article.theme.description &&
              <Box display="flex" alignItems="center" justifyContent="center" mr={1} ml={1}>
                <Box mr={1}>
                  <FontAwesomeIcon icon={faTag} color="#000" />
                </Box>
                <p>{article.theme.description}</p>
              </Box>
            }
            {article.category && article.category.description &&
              <Box display="flex" alignItems="center" justifyContent="center" mr={1} ml={1}>
                <Box mr={1}>
                  <FontAwesomeIcon icon={faTags} color="#000" />
                </Box>
                <p>{article.category.description}</p>
              </Box>
            }
            <Box display="flex" justifyContent="center" alignItems="center" mr={1} ml={1}>
              <p>Publicado em: {`${article.publishedAt}`}</p>
            </Box>
          </Grid>
          <Divider className="divider" />
          { article.headerImg &&
              <Grid item xs={12} className="article-header">
                <img src={`${article.headerImg}`} alt={article.longDescription}/>
              </Grid>
          }
          <Grid item xs={12} id="article-content">{article && article.content}</Grid>
          <Grid item xs={12} className="article-footer">
            <Box p={3} display="flex" alignItems="center">
              <Box mr={2} ml={2}>
                <Box>
                  <FontAwesomeIcon icon={faHeart} className="foot-button" color={'#8a05be'} size="2x"/>
                </Box>
              </Box>
              <Box mr={2} ml={2}>
                <Box>
                  <FontAwesomeIcon icon={faShareAlt} className="foot-button" color="#8a05be" size="2x"/>
                </Box>
              </Box>
              <Box mr={2} ml={2}>
                <FontAwesomeIcon icon={faCommentDots} className="foot-button" color="#8a05be" size="2x"/>
              </Box>
            </Box>
          </Grid>
          { false &&
                            <Divider />
          }
          { false &&
                            <Grid item xs={12} className="more_related">
                              <Box className="more_related_title" display="flex" alignItems="center">
                                <Box display="flex" alignItems="center" mr={1}>
                                  <Box m={1}>
                                    <FontAwesomeIcon icon={faPaperclip} size="1x" color="#8a05be" id="related-articles" tabIndex="-1" />
                                  </Box>
                                  <Box m={1}>
                                    <FontAwesomeIcon icon={faFileCode} size="2x" color="#8a05be" />
                                  </Box>
                                </Box>
                                <h2>Conteúdos relacionados</h2>
                              </Box>
                              <Grid item xs={12} className="more_related_content">
                              </Grid>
                            </Grid>
          }
          <Divider />
          {/* <Grid item xs={12} className="comments">
            <Box className="comments_title" display="flex" alignItems="center">
              <Box display="flex" alignItems="center" mr={1}>
                <Box m={1}>
                  <FontAwesomeIcon icon={faPaperclip} size="1x" color="#8a05be" id="form-comment" tabIndex="-1" />
                </Box>
                <Box m={1}>
                  <FontAwesomeIcon icon={faCommentDotsRegular} size="2x" color="#8a05be" />
                </Box>
              </Box>
              <h2>Comentários</h2>
            </Box>
            <Box className={false ? 'form-comment' : 'info_comment'}>
              { !false &&
                <Zoom in={!false}>
                  <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={3}>
                      <p>
                                          Para visualizar os demais comentários,
                                          basta descer a página um <strong style={{color: '#8a05be'}}>pouquinho</strong> mais...
                      </p>
                      <p>Que deixar um comentário? basta clicar no botão abaixo!</p>
                    </Box>
                    <Button className="coder-mind-button" variant="contained">
                      <span style={{color: '#fff'}}>Quero enviar um comentário</span>
                    </Button>
                  </Box>
                </Zoom>
              }
              {false &&
                <Zoom in={false}>
                  <Box display="flex" flexDirection="column" width="100%" >
                    <Box display="flex" justifyContent="flex-end" alignItems="center">
                      <IconButton
                        style={{color: '#8a05be'}}
                      >
                        <Icon>clear</Icon>
                      </IconButton>
                    </Box>
                    <TextField
                      className="comments-input"
                      id="user-name"
                      label="Nome *"
                      color="secondary"
                      error={false}
                      helperText={''}
                    />
                    <TextField
                      className="comments-input"
                      id="user-email"
                      label="E-mail *"
                      error={false}
                      helperText={''}
                    />
                    <TextField
                      className="comments-input comments-comment"
                      id="user-comment"
                      label="Comentário *"
                      multiline={true}
                      error={false}
                      helperText={''}
                    />
                    <Box mt={2} mb={2}>
                      <ReCAPTCHA
                        sitekey="6LePkK8UAAAAACKAocqyAEB2YQr4cnd3j8Ya2b2U"
                        onChange={(response) => null}
                        size="compact"
                      />
                    </Box>
                    <Button
                      className="coder-mind-button"
                      style={{color: '#fff'}}
                      variant="contained"
                      disabled={false}
                      onClick={() => null}
                    >
                                            Enviar
                    </Button>
                  </Box>
                </Zoom>
              }
            </Box>
            <Grid item xs={12} className="comments-content">
              { false &&
                [].map((comment) =>
                  <Comment key={comment._id} comment={comment}/>)
              }
              { false &&
                <Grid item xs={12}>
                  <Box width="100%" display="flex" justifyContent="center" alignItems="center">
                    <Button className="coder-mind-button" variant="contained">
                        Ver mais
                    </Button>
                  </Box>
                </Grid>
              }
              { true &&
                <Box display="flex" justifyContent="center" alignItems="center" mt={5} mb={5}>
                  <Icon fontSize="large" style={{color: '#8a05be'}}>priority_high</Icon>
                  <p>Ops, este artigo não possui comentários. Seja o primeiro a&nbsp;
                    <span
                      style={{color: '#8a05be', fontWeight: 'bold', cursor: 'pointer'}}
                      variant="text"
                      size="small"
                      onClick={() => {
                        document.querySelector('#form-comment').focus();
                      }}>
                                            comentar
                    </span>
                  </p>
                </Box>
              }
            </Grid>
          </Grid> */}
        </Grid>
      }
      { isLoading &&
        <Grid className="article-wrapper">
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
            <figure>
              <img src={null} alt="Carregando..."/>
              <p>Carregando seu artigo, por favor aguarde...</p>
            </figure>
            <Box display="flex" justifyContent="center" alignItems="center">
              <small
                className="refer"
              >
                                Powered by <a href="https://loading.io"
                  rel="noopener noreferrer" target="_blank">loading.io</a></small>
            </Box>
          </Box>
        </Grid>
      }
      { isError && !isLoading &&
        <Grid className="article-wrapper">
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
        </Grid>
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
    </Grid>
  );
};

Article.propTypes = {
  match: matchType.isRequired,
};

export default Article;
