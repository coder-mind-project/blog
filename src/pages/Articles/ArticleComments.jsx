import React from 'react';
import {Box} from '@material-ui/core';

const ArticleComments = () => {
  return (
    <Box>
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
    </Box>
  );
};


export default ArticleComments;
