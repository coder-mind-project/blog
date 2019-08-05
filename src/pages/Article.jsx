import React, { Component } from 'react'
import { Grid, Box, Divider, TextField,
        Button, Zoom, Snackbar, Icon, IconButton,
        CircularProgress } from '@material-ui/core'

import { api_cm_web_service, api_cm_management, url } from '../config/appConfig'
import axios from 'axios'

import ReCAPTCHA from "react-google-recaptcha"

import Avatar from 'react-avatar'
import RelatedArticle from '../components/RelatedArticle.jsx'
import Comment from '../components/Comment.jsx'

import LoadingEllipsis from '../assets/loading-ellipsis.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag, faTags, faDownload, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-regular-svg-icons'
import { faFacebookSquare, faTwitterSquare, faWhatsapp, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, TelegramShareButton, LinkedinShareButton  } from 'react-share'

import FloatingButton from '../components/FloatingButton.jsx'

import { PDFDownloadLink } from '@react-pdf/renderer'

import {PDFSample} from '../components/PDFSample.jsx'

import './css/Article.css'

class Article extends Component {
    state = { 
        article: null,
        loadingArticle: false,
        error: false,
        liked: false,

        relatedArticles: [],
        loadingRelateds: false,

        comments: [],
        comment: {
            userName: '',
            userEmail: '',
            comment: '',
            response: null,
        },
        sendingComment: false,
        showFormComment: false,
        showSuccessComment: false,
        showErrorComment: false,
        enableDownload: false,
    }

    enable(){
        this.setState({enableDownload: true})
    }

    toogleLoadingArticle(){
        this.setState({loadingArticle: !this.state.loadingArticle})
    }

    toogleLoadingRelatedArticles(){
        this.setState({loadingRelateds: !this.state.loadingRelateds})
    }

    async getArticle(){
        const customURL = this.props.match.params.resource
        const url = `${api_cm_web_service}/articles/${customURL}`

        await this.toogleLoadingArticle()
        await axios(url).then( async res => {
            await this.setState({
                article: res.data.article,
                comments: res.data.comments
            })
        }).catch(error => {
            this.setState({error})
        })
        this.toogleLoadingArticle()
        
        if(this.state.article) document.querySelector('#article-content').innerHTML = this.state.article.textArticle

        this.getRelateds(customURL)
        this.setView()
    }

    setView(){
        const url = `${api_cm_web_service}/articles`
        const article = this.state.article
        axios.post(url, article)
    }

    formatDate(date){
        const aux = date.split('T')
        let dayMonthYear = aux[0].split('-')
        dayMonthYear = `${dayMonthYear[2]}/${dayMonthYear[1]}/${dayMonthYear[0]}`
        
        let hours = aux[1].split('.')[0]

        return `${dayMonthYear} - ${hours}`
    }

    async getRelateds(customURL){
        const url = `${api_cm_web_service}/articles/relateds/${customURL}`
        await this.toogleLoadingRelatedArticles()
        await axios(url).then(res => {
            this.setState({relatedArticles: res.data})
        })

        this.toogleLoadingRelatedArticles()
    }

    async handleComment(event, attr){
        const value = event.target.value

        this.setState({
            comment: {
                ...this.state.comment,
                [attr]: value
            }
        })
    }

    toogleSendingComment(){
        this.setState({sendingComment: !this.state.sendingComment})
    }

    async sendComment(){
        await this.toogleSendingComment()
        const url = `${api_cm_web_service}/comments/article`
        const comment = {
            ...this.state.comment,
            article: this.state.article
        }
        await axios.post(url, comment).then(() => {
            this.setState({
                showSuccessComment: true,
                showFormComment: false,
                comment: {
                    userName: '',
                    userEmail: '',
                    comment: '',
                    response: null,
                },
            })
        }).catch((error) => { 
            this.setState({showErrorComment: error.response && error.response.data ? error.response.data : 'Ocorreu um erro desconhecido, por favor tente mais tarde'})
        })

        this.toogleSendingComment()
    }


    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        
        this.setState({showSuccessComment: false, showErrorComment: false});
    }

    async goToComments(){
        document.querySelector('#comments').focus()
    }


    
    async componentDidMount(){
        await this.getArticle()
        this.enable()
    }

    render() { 
        return ( 
            <Grid className="article-wrapper">
                { this.state.article && !this.state.loadingArticle &&
                    <Grid item xs={12} className="article-content">
                        { this.state.article.bigImg && 
                            <Grid item xs={12} className="article-header">
                                <img src={`${api_cm_management}/${this.state.article.bigImg}`} alt={this.state.article.longDescription}/>
                            </Grid>
                        }
                        <Grid item xs={12} className="article-title">
                            <h1>{this.state.article.title}</h1>
                        </Grid>
                        <Grid item xs={12} className="article-short-description">
                            <h2 className="short-description">{this.state.article.shortDescription}</h2>
                        </Grid>
                        <Grid item xs={12} className="header-hud-bar">
                            <Box display="flex" justifyContent="center" alignItems="center" mr={1} ml={1}>
                                <Box mr={1} display="flex" alignItems="center">
                                    <Avatar name={this.state.article.author.name} size={30} round={true} />
                                </Box>
                                <p>{this.state.article.author.name}</p>
                            </Box>
                            {this.state.article.theme && this.state.article.theme.name &&
                                <Box display="flex" alignItems="center" justifyContent="center" mr={1} ml={1}>
                                    <Box mr={1}>
                                        <FontAwesomeIcon icon={faTag} color="#000" />
                                    </Box>
                                    <p>{this.state.article.theme.name}</p>
                                </Box>
                            }
                            {this.state.article.category && this.state.article.category.name &&
                                <Box display="flex" alignItems="center" justifyContent="center" mr={1} ml={1}>
                                    <Box mr={1}>
                                        <FontAwesomeIcon icon={faTags} color="#000" />
                                    </Box>
                                    <p>{this.state.article.category.name}</p>
                                </Box>
                            }
                            <Box display="flex" justifyContent="center" alignItems="center" mr={1} ml={1}>
                                <p>Publicado em: {`${this.formatDate(this.state.article.publishAt)}`}</p>
                            </Box>
                        </Grid>
                        { this.state.article && this.state.article._id &&
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                    <FacebookShareButton className="share-button" url={`${url}/artigos/${this.props.match.params.resource}`} quote={`Veja mais sobre ${this.state.article.title}`} children={<FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#3C5A99"/>} />
                                    <TwitterShareButton className="share-button" url={`${url}/artigos/${this.props.match.params.resource}`} title={`${this.state.article.title}`} hashtags={[`${this.state.article.theme.name}`, `${this.state.article.title}`, 'Coder Mind']} children={<FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#1da1f2"/>} />
                                    <WhatsappShareButton className="share-button" url={`${url}/artigos/${this.props.match.params.resource}`} title={`Veja mais sobre ${this.state.article.title}`} separator=" | " children={<FontAwesomeIcon icon={faWhatsapp} size="2x" color="#58e870"/>} />
                                    <LinkedinShareButton className="share-button" url={`${url}/artigos/${this.props.match.params.resource}`} children={<FontAwesomeIcon icon={faLinkedin} size="2x" color="#0077B5"/>} />
                                    <TelegramShareButton className="share-button" url={`${url}/artigos/${this.props.match.params.resource}`} title={`Veja mais sobre ${this.state.article.title}`} children={<FontAwesomeIcon icon={faTelegram} size="2x" color="#0088cc"/>} />
                                </Box>
                            </Grid>
                        }
                        <Divider className="divider" />  
                        <Grid item xs={12} id="article-content"></Grid>
                        <Grid item xs={12} className="article-footer">
                            <Box p={3} display="flex" alignItems="center">
                                {/* <Box mr={2} ml={2}>
                                        <Box>
                                            <FontAwesomeIcon icon={faHeart} className="foot-button" color={this.state.liked ? '#f50057' : 'gray'} size="2x" onClick={() => this.setState({liked: !this.state.liked})}/>
                                        </Box>
                                </Box> */}
                                <Box mr={2} ml={2}>
                                { this.state.enableDownload && 
                                    <PDFDownloadLink
                                        document={<PDFSample article={this.state.article} />}
                                        fileName={`${this.state.article.title} - Coder Mind.pdf`}
                                    >
                                        {({ blob, url, loading, error }) =>
                                            <FontAwesomeIcon icon={faDownload} className="foot-button" color="#f50057" size="2x"/>
                                        }
                                    </PDFDownloadLink>

                                }
                                    
                                </Box>
                                <Box mr={2} ml={2}>
                                    <FontAwesomeIcon icon={faCommentDots} className="foot-button" size="2x" onClick={() => this.goToComments()}/>
                                </Box>
                            </Box>
                        </Grid>
                        { this.state.relatedArticles.length > 0 && 
                            <Divider />
                        }
                        { this.state.relatedArticles.length > 0 && 
                            <Grid item xs={12} className="more_related">
                                <Box className="more_related_title" display="flex" alignItems="center">
                                    <Box mr={1}>
                                        <FontAwesomeIcon icon={faFileCode} size="2x" />
                                    </Box>
                                    <h2>Conteúdos relacionados</h2>
                                </Box>
                                <Grid item xs={12} className="more_related_content">
                                    {this.state.relatedArticles.map(article => (<RelatedArticle article={article} key={article._id} />))}
                                </Grid>
                            </Grid>
                        }
                        <Divider />
                        <Grid item xs={12} className="comments">
                            <Box className="comments_title" display="flex" alignItems="center">
                                <Box mr={1}>
                                    <FontAwesomeIcon icon={faCommentDots} size="2x" />
                                </Box>
                                <h2>Comentários</h2>
                            </Box>
                            <Box className={this.state.showFormComment ? "form-comment" : "info_comment"}>
                                { !this.state.showFormComment &&
                                <Zoom in={!this.state.showFormComment}>
                                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mb={3}>
                                            <p>Para visualizar os demais comentários, basta descer a página um <strong>pouquinho</strong> mais...</p>
                                            <p>Que deixar um comentário? basta clicar no botão abaixo!</p>
                                        </Box>
                                        <Button color="secondary" variant="contained" onClick={() => this.setState({showFormComment: true})}>Quero enviar um comentário</Button>
                                    </Box>
                                </Zoom>
                                }
                                {this.state.showFormComment && 
                                    <Zoom in={this.state.showFormComment}>
                                            <Box display="flex" flexDirection="column" width="100%" >
                                                <Box display="flex" justifyContent="flex-end" alignItems="center">
                                                    <IconButton
                                                        color="inherit"
                                                        onClick={() => this.setState({showFormComment: false})}
                                                    >
                                                            <Icon>clear</Icon>
                                                    </IconButton>
                                                </Box>
                                                    <TextField className="comments-input" id="user-name" label="Nome *" value={this.state.comment.userName} onChange={(event) => this.handleComment(event, 'userName')} color="secondary"/>
                                                    <TextField className="comments-input" id="user-email" label="E-mail *" value={this.state.comment.userEmail} onChange={(event) => this.handleComment(event, 'userEmail')}/>
                                                    <TextField className="comments-input comments-comment" id="user-comment" label="Comentário *" multiline={true} value={this.state.comment.comment} onChange={(event) => this.handleComment(event, 'comment')}/>
                                                    <Box mt={2} mb={2}>
                                                        <ReCAPTCHA
                                                            sitekey="6LePkK8UAAAAACKAocqyAEB2YQr4cnd3j8Ya2b2U"
                                                            onChange={(response) => this.setState({comment: {
                                                                ...this.state.comment,
                                                                response 
                                                            }})}
                                                        />
                                                    </Box>
                                                    <Button color="secondary" variant="contained" disabled={this.state.sendingComment} onClick={() => this.sendComment()}>{this.state.sendingComment ? <Box display="flex" alignItems="center"><Box mr={1} display="flex" alignItems="center" ><CircularProgress size={20} color="inherit"/></Box>Enviando...</Box> : <Box>Enviar</Box>}</Button>
                                            </Box>
                                    </Zoom>
                                }
                            </Box>
                            <Grid item xs={12} className="comments-content" id="comments" tabIndex="-1">
                                { this.state.comments.length > 0 && 
                                    this.state.comments.map(comment => 
                                        <Comment key={comment._id} comment={comment}/>)
                                }
                                { this.state.comments.length === 0 && !this.state.loadingArticle &&
                                    <Box display="flex" justifyContent="center" alignItems="center" mt={5} mb={5}>
                                        <Icon fontSize="large" color="secondary">priority_high</Icon>
                                        <p>Ops, este artigo não possui comentários. Seja o primeiro a </p>
                                        <Box>
                                            <Button color="secondary" variant="text" size="small" onClick={async () => {
                                                await this.setState({showFormComment: true})
                                                document.querySelector('#user-name').focus()
                                            }}>
                                                comentar
                                            </Button>
                                        </Box>
                                    </Box>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                }
                { this.state.loadingArticle && 
                    <Grid className="article-wrapper">
                        <Box display="flex" flexDirection="column" justifyContent="start" height="100vh">
                            <figure>
                                <img src={LoadingEllipsis} alt="Carregando..."/>
                                <p>Carregando seu artigo, por favor aguarde...</p>
                            </figure>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small>
                            </Box>
                        </Box>
                    </Grid>
                }
                { this.state.error && !this.state.loadingArticle && 
                    <Grid className="article-wrapper">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
                            <Box display="flex" alignItems="baseline" justifyContent="center" flexDirection="column" p={2}>
                                <Box display="flex" alignItems="center" flexWrap="wrap">
                                    <Box display="flex" justifyContent="center" alignItems="center" className="error-icon-area">
                                        <Icon color="secondary" className="error-icon">healing</Icon>
                                    </Box>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        <h2 className="message-error">Ops, ocorreu um erro ao recuperar seu artigo. Já tentou atualizar a página?</h2>
                                    </Box>
                                </Box>
                                <Box display="flex" flexDirection="column" width="100%" mt={3}>
                                    <Button color="secondary" fullWidth variant="outlined" onClick={() => window.location.reload()}>Atualizar página</Button>
                                </Box>
                                <Box display="flex" flexDirection="column" width="100%" mt={3}>
                                    <Button color="secondary" fullWidth variant="contained" onClick={() => window.location.href = '/sobre#contact'}>Reportar bug</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                }
                <FloatingButton action={() => document.documentElement.scrollTop = 0}/>
                <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={this.state.showSuccessComment}
                        autoHideDuration={6000}
                        onClose={() => this.handleClose()}
                        ContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<h3 id="message-id">Comentário enviado, em 24 horas ele estará publico para outros usuários</h3>}
                        action={[
                        <Button key="undo" color="secondary" size="small" onClick={() => this.handleClose()}>
                            Fechar
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={() => this.handleClose()}
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
                        open={Boolean(this.state.showErrorComment)}
                        autoHideDuration={6000}
                        onClose={() => this.handleClose()}
                        ContentProps={{
                        'aria-describedby': 'message-id',
                        }}
                        message={<h3 id="message-id">{this.state.showErrorComment}</h3>}
                        action={[
                        <Button key="undo" color="secondary" size="small" onClick={() => this.handleClose()}>
                            Fechar
                        </Button>,
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            onClick={() => this.handleClose()}
                        >
                            <Box ml={1}>
                                <Icon>clear</Icon>
                            </Box>
                        </IconButton>,
                        ]}
                    />
            </Grid>
        )
    }
}

export default Article