import React, { Component } from 'react'
import { Grid, Button, Box, Tabs, Tab } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs, faJava, faReact } from '@fortawesome/free-brands-svg-icons'

import { Link } from 'react-router-dom'

import axios from 'axios'

import HotArticle from '../components/HotArticle.jsx'
import FloatingButton from '../components/FloatingButton.jsx'

import LoadingEllipsis from '../assets/loading-ellipsis.gif'

import './css/Home.css'

class Home extends Component {
    state = { 
        open: false,
        search: '',
        loading: false,
        hotArticles: [],
        value: 0,
    }

    searchArticles(){
        window.location.href=`/artigos?q=${this.state.search}`
    }

    toogleLoading(){
        this.setState({loading: !this.state.loading})
    }

    async getHotArticles(){
        await this.toogleLoading()
        const url = "http://localhost:3002/articles?home=yes"
        await axios(url).then(res => {
            this.setState({hotArticles: res.data.boostedArticles.articles})
        }).catch(error => console.log('Ocorreu um erro'))
        this.toogleLoading()
    }

    componentDidMount(){
        this.getHotArticles()
    }

    render() { 
        return ( 
            <div>
                <Grid item xs={12} className="main-container">
                        <Box display="flex" alignItems="center" mb={2}>
                            <Box p={1}>
                                <FontAwesomeIcon icon={faJava} size="8x" className="main-container-img" />
                            </Box>
                            <Box p={1}>
                                <FontAwesomeIcon icon={faNodeJs} size="8x" className="main-container-img" />
                            </Box>
                            <Box p={1}>
                                <FontAwesomeIcon icon={faReact} size="8x" className="main-container-img" />
                            </Box>
                        </Box>
                        <h3 className="main-container-msg">
                            Aqui na <span style={{color: '#22E1C7'}} className="coder-mind">Coder</span> <span style={{color: '#f50057'}} className="coder-mind">Mind</span> você poderá acompanhar bons
                            conteúdos de tecnologia. De programação a arquitetura de computadores e tudo
                            isso de graça!
                        </h3>
                        <Link to="/artigos">
                            <Button color="secondary" variant="contained">Ver Mais</Button>
                        </Link>
                </Grid>
                <Grid item xs={12} className="best_articles">
                    <Box display="flex" alignItems="baseline" justifyContent="center">
                        <Box display="flex" flexDirection="column" alignItems="baseline" width="100%">
                            <Box display="flex" alignItems="baseline" justifyContent="center" flexWrap="wrap">
                                <h1>Melhores publicações</h1>
                                <small className="small-text">Primeira leitura? Aqui vai umas sugestões...</small>
                            </Box>
                            <Box mt={3} mb={3} width="100%">
                                { this.state.loading && 
                                    <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                                        <figure className="text-center">
                                            <img className="loading-ellipsis" src={LoadingEllipsis} alt="Carregando..."/>
                                            <figcaption><small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small></figcaption>
                                        </figure>
                                    </Box>
                                }
                                { !this.state.loading && this.state.hotArticles.length > 0 &&
                                    <Tabs
                                        value={this.state.value}
                                        onChange={(event, value) => this.setState({value})}
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        variant="scrollable"
                                        scrollButtons="auto"
                                    >
                                        {/*<Box display="flex" alignItems="center" className="top-articles-content" id='top-articles-content'>*/}
                                            { this.state.hotArticles.map((article, key) => 
                                                <Tab key={article._id} label={( 
                                                    <Link to={`/artigos/${article.customURL}`} className="top-article">
                                                        <HotArticle article={article} />
                                                    </Link>
                                                )}/>)
                                            }
                                        {/*</Box>*/}
                                    </Tabs>
                                }
                            </Box>
                            <Box display="flex" flexDirection="column" width="100%" mt={4} mb={4}>
                                <Box display="flex" justifyContent="center" mb={2}>
                                    <span className="search-label">Ou se prefirir, pode buscar o conteúdo desejado</span>
                                </Box>
                                <SearchBar
                                    value={this.state.search}
                                    onChange={(search) => this.setState({ search })}
                                    onRequestSearch={() => this.searchArticles()}
                                    placeholder="O que vem na sua mente?"
                                    width="100%"
                                    className="search-input"
                                />
                            </Box>
                        </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} className="about_project">
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="baseline" justifyContent="flex-start" flexWrap="wrap" width="100%">
                            <h1>Projeto</h1>
                            <small className="small-text">Saiba mais sobre o propósito deste projeto</small>
                        </Box>
                        <Box display="flex" alignItems="center" flexWrap="wrap">
                            <Grid item xs={12} md={6} className="about_project_one">
                                <Box mr={2}>
                                    <FontAwesomeIcon icon={faPeopleCarry} size="5x" />
                                </Box>
                                <Box>
                                    <p>
                                        Trabalhando para trazer materiais de qualidade, fundamentado nas melhores práticas e com exemplos práticos.
                                        Aqui desenvolvemos conteúdos para lhe adiantar nas dúvidas que aparecerem durante seu dia a dia.
                                    </p>
                                    <p>
                                        E não somente isso!
                                    </p>
                                    <p>
                                        Afim de realizar uma boa leitura? Fique a vontade para procurar bons artigos em nosso site!
                                    </p>
                                    <Box mt={2} mb={2}>
                                        <Link to="/artigos">
                                            <Button color="secondary" variant="contained" size="small">
                                                Ver mais
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} className="about_project_two">
                                <Box>
                                    <p>Dúvidas? Bugs na platafoma? Quer falar conosco?</p>
                                    <p>
                                        Acesse nosso <Link to="/faq">FAQ</Link> ou mande uma 
                                        mensagem clicando no botão abaixo,
                                        estamos ansiosos para respondê-lo!
                                    </p>
                                    <Box mt={2} mb={2}>
                                        <a href="/sobre#contact">
                                            <Button color="secondary" variant="contained" size="small">
                                                Ver mais
                                            </Button>
                                        </a>
                                    </Box>
                                </Box>
                                <Box ml={2}>
                                    <FontAwesomeIcon icon={faQuestionCircle} size="5x" />
                                </Box>
                            </Grid>
                        </Box>
                    </Box>  
                <FloatingButton action={() => document.documentElement.scrollTop = 0} />
                </Grid>
            </div>
        )
    }
}

export default Home