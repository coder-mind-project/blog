import React, { Component } from 'react'
import { Grid, Button, Box, Tabs, Tab, Icon } from '@material-ui/core'
import SearchBar from 'material-ui-search-bar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleCarry, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { Link } from 'react-router-dom'

import axios from 'axios'

import HotArticle from '../components/HotArticle.jsx'
import FloatingButton from '../components/FloatingButton.jsx'

import Loading from '../assets/loading.gif'

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
        if(this.state.search.trim().length === 0) return
        window.location.href=`/artigos?q=${this.state.search}`
    }

    toogleLoading(){
        this.setState({loading: !this.state.loading})
    }

    async getHotArticles(){
        await this.toogleLoading()
        const url = `/articles?home=yes`
        await axios(url).then(res => {
            this.setState({hotArticles: res.data.articles})
        })

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
                                <Icon className="main-container-img">phone_iphone</Icon>
                                {/* <FontAwesomeIcon icon={faMobileAlt} size="8x" className="main-container-img" /> */}
                            </Box>
                            <Box p={1}>
                                <Icon className="main-container-img">computer</Icon>
                                {/* <FontAwesomeIcon icon={faLaptop} className="main-container-img" /> */}
                            </Box>
                            <Box p={1}>
                                <Icon className="main-container-img">widgets</Icon>
                                {/* <FontAwesomeIcon icon={faDatabase} className="main-container-img" /> */}
                            </Box>
                        </Box>
                        <h3 className="main-container-msg">
                            Programação, banco de dados, e tecnologia em geral. De fundamentos a ferramentas, <br/>na
                            &nbsp;<span className="coder-mind" style={{fontSize: '1.4rem'}}>Coder Mind</span>&nbsp;
                            você irá acompanhar bons conteúdos de tecnologia.
                        </h3>
                        <Link to="/artigos">
                            <Button variant="contained">Ver Mais</Button>
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
                                            <img className="loading-ellipsis" src={Loading} alt="Carregando..."/>
                                            <figcaption><small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small></figcaption>
                                        </figure>
                                    </Box>
                                }
                                { !this.state.loading && this.state.hotArticles.length > 0 &&
                                    <Tabs
                                        value={this.state.value}
                                        onChange={(event, value) => this.setState({value})}
                                        indicatorColor="primary"
                                        textColor="inherit"
                                        variant="scrollable"
                                        scrollButtons="auto"
                                    >
                                        {/*<Box display="flex" alignItems="center" className="top-articles-content" id='top-articles-content'>*/}
                                            { this.state.hotArticles.map((article) => 
                                                <Tab key={article.uri} label={( 
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
                                    searchIcon={<Icon className="search-input-button" color="primary">search</Icon>}
                                />
                            </Box>
                        </Box>
                    </Box>    
                </Grid>
                <Grid item xs={12} className="about_project">
                    <Box display="flex" alignItems="baseline" justifyContent="flex-start" flexWrap="wrap" width="100%">
                        <h1>Projeto</h1>
                        <small className="small-text">Saiba mais sobre o propósito deste projeto</small>
                    </Box>
                    <Box display="flex" flexDirection="column" p={5}>
                        <Box display="flex" alignItems="center" flexWrap="wrap">
                            <Grid item xs={12} md={6} className="about_project_one">
                                <Box mr={2} display="flex" alignItems="center">
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
                                    <Box mt={2} mb={2} display="flex" justifyContent="center">
                                        <Link to="/artigos">
                                            <Button color="primary" variant="contained" size="small" className="coder-mind-button">
                                                Ver mais
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} className="about_project_two">
                                <Box mr={2} display="flex" alignItems="center">
                                    <FontAwesomeIcon icon={faQuestionCircle} size="5x" />
                                </Box>
                                <Box>
                                    <p>Dúvidas? Bugs na platafoma? Quer falar conosco?</p>
                                    <p>
                                        Acesse nosso <Link to="/faq"><strong style={{color: '#8a05be', textDecoration: 'underline'}}>FAQ</strong></Link> ou mande uma 
                                        mensagem clicando no botão abaixo,
                                        estamos ansiosos para respondê-lo!
                                    </p>
                                    <Box mt={2} mb={2} display="flex" justifyContent="center">
                                        <a href="/sobre#contact">
                                            <Button color="primary" variant="contained" size="small" className="coder-mind-button">
                                                Ver mais
                                            </Button>
                                        </a>
                                    </Box>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>  
                <FloatingButton action={() => window.scrollTo(0,0)} />
                </Grid>
            </div>
        )
    }
}

export default Home