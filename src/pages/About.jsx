import React, { Component } from 'react'
import Photo from '../assets/allan-wanderley.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPaperclip, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { Grid, Box, TextField, Button, ButtonBase, Icon,
        CircularProgress, Snackbar, IconButton } from '@material-ui/core'

import axios from 'axios'
import { api_cm_web_service } from '../config/appConfig'
import './css/About.css'
class About extends Component {
    state = { 
        email: '',
        msg: '',
        sending: false,

        showSuccessSend: false,
        showErrorSend: false,
    }

    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        
        this.setState({showSuccessSend: false, showErrorSend: false});
    }

    handleChange(event, attr){
        const value = event.target.value
        this.setState({[attr]: value})
    }

    goTo(link){
        window.open(link)
    }

    changeStateSending(){
        this.setState({sending: !this.state.sending})
    }

    async sendMessage(event){
        event.preventDefault()
        await this.changeStateSending()
        const url = `${api_cm_web_service}/contact`
        const message = {
            email: this.state.email,
            message: this.state.msg
        }

        await axios.post(url, message).then(res => {
            this.setState({
                showSuccessSend: true,
                email: '',
                msg: ''
            })
        }).catch(error => {
            const msg = error.response && error.response.data ? error.response.data : 'Ops, ocorreu um erro desconhecido. Que tal tentar novamente?'
            this.setState({showErrorSend: msg})
        })
            /* ... */
        this.changeStateSending()
    }

    render() { 
        return ( 
            <Grid item xs={12} className="container">
                <h1>Sobre o projeto</h1>
                <p>Fala pessoal, beleza?</p>
                <p>Meu nome é Allan, tenho 21 anos e sou o idealizador deste projeto. Sempre gostei de ensinar conhecimentos que julgo dominar e por vontade de colocar a mão na massa resolvi começar esse projeto.</p>
                <p>Não existe nada comercial por trás desta iniciativa e sim uma vontade de persistir um conteúdo bom e principalmente de graça!</p>
                <p>Fiquem a vontade para me conhecer ai embaixo e acima de tudo vamos trocar conhecimento, se você estar aqui então quer dizer que se minimamente se interessou. Então vamos lá, dê aquela força e compartilhe o material com quem possa estar precisando. Caso queira tirar dúvidas ou simplesmente trocar uma idéia basta entrar em contato pela plataforma que quiser, prometo que te respondo o mais rápido possível.</p>
                <p>Então é isso, forte abraço e espero que a experiência tenha sido excelente!</p>
                <Box mt={5} mb={5} display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                    <figure>
                        <img src={Photo} alt="Foto de Allan" className="photography" />
                        <figcaption>Allan Wanderley - Idealizador do projeto</figcaption>
                    </figure>
                    <Box className="social-media">
                        <Button color="secondary" variant="contained" size="small" onClick={() => this.goTo('https://allanalves23.top/')}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faUserTie}/>
                            </Box>
                            Website
                        </Button>
                        <Button color="secondary" variant="contained" size="small" onClick={() => this.goTo('https://github.com/')}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faGithubAlt}/>
                            </Box>
                            Github Coder Mind
                        </Button>
                        <Button color="secondary" variant="contained" size="small" onClick={() => this.goTo('mailto:awallan259@gmail.com')}>
                            <Box mr={1}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </Box>
                            E-mail de contato
                        </Button>
                    </Box>
                </Box>
                <Box mt={3} mb={1}>
                    <Box display="flex" alignItems="center">
                        <Box m={1}>
                            <FontAwesomeIcon icon={faPaperclip} size="1x" color="#f50057" id="contact" tabIndex="-1" />
                        </Box>
                        <Box m={1}>
                            <h2>Prefere falar conosco de outra forma?</h2>
                        </Box>
                    </Box>
                    <p>Basta nos informar seu e-mail de contato e incluir sua mensagem.</p>
                    <p>Pode ficar tranquilo, qualquer tipo de dado fornecido a este site é 100% confidencial e instranferível</p>
                    <label htmlFor="email"></label>
                    <form onSubmit={(event) => this.sendMessage(event)} autoComplete="on">
                        <Box mt={4}>
                            <Box mb={2}>
                                <TextField id="email" fullWidth placeholder="Informe o seu e-mail" value={this.state.email} onChange={(event) => this.handleChange(event, 'email')} error={this.state.email.length > 100} helperText={this.state.email.length > 100 ? "Quantidade de caracteres acima do permitido" : ""}></TextField>
                            </Box>
                            <Box mb={5}>
                                <TextField id="message" multiline className="input-message" fullWidth placeholder="Digite sua mensagem" value={this.state.msg} onChange={(event) => this.handleChange(event, 'msg')} error={this.state.msg.length > 1000} helperText={this.state.msg.length > 1000 ? "Quantidade de caracteres acima do permitido, se necessário nos envie um e-mail" : ""} />
                            </Box>
                            <Box mb={2}>
                                <ButtonBase type="submit" className="button-base-equal-button">
                                    <Box display="flex" justifyContent="center" alignItems="center" mr={1}>
                                        {this.state.sending ? 
                                            <CircularProgress color="inherit" size={16} />
                                            : <Icon>send</Icon>
                                        }
                                    </Box>
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        {this.state.sending ? 'Enviando...' : 'Enviar'}
                                    </Box>
                                </ButtonBase>
                            </Box>
                        </Box>
                    </form>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={Boolean(this.state.showSuccessSend)}
                        autoHideDuration={6000}
                        onClose={() => this.handleClose()}
                        ContentProps={{
                        'aria-describedby': 'message-id',
                        }}
                        message={<h3 id="message-id">Mensagem enviada com sucesso! Agora é com a gente, prometemos te responder rapidinho ;)</h3>}
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
                        open={Boolean(this.state.showErrorSend)}
                        autoHideDuration={6000}
                        onClose={() => this.handleClose()}
                        ContentProps={{
                        'aria-describedby': 'message-id',
                        }}
                        message={<h3 id="message-id">{this.state.showErrorSend}</h3>}
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
                </Box>
            </Grid>
        )
    }
}

export default About