import React, { Component } from 'react'

import 'react-checkbox-tree/lib/react-checkbox-tree.css'

import { Box, Grid, Drawer, Icon, Button,
        IconButton, CircularProgress,
        Select, TextField, Divider} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFilter, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import LoadingEllipsis from '../assets/loading-ellipsis.gif'

import ArticleBox from '../components/ArticleBox.jsx'
import FloatingButton from '../components/FloatingButton.jsx'

import SearchBar from 'material-ui-search-bar'

import queryString from 'query-string'

import axios from 'axios'
import { api_cm_web_service } from '../config/appConfig'

import './css/ArticlesList.css'



class ArticlesList extends Component {
    state = { 
        themes: [],
        loadingThemes: false,

        articles: [],
        page: 1,
        count: 0,
        limit: 5,
        loadingArticles: false,
        loadingMoreArticles: false,
        author: '',
        theme: '',

        drawer: false,
        search: '',
    
    }

    handleChange(event, attr){
        const value = event.target.value
        this.setState({
            [attr]: value
        })
    }

    toogleLoadingThemes(){
        this.setState({loadingThemes: !this.state.loadingThemes})
    }

    toogleLoadingArticles(){
        this.setState({loadingArticles: !this.state.loadingArticles})
    }

    toogleLoadingMoreArticles(){
        this.setState({loadingMoreArticles: !this.state.loadingMoreArticles})
    }

    toogleDrawer(){
        this.setState({drawer: !this.state.drawer})
    }
    
    async getThemes(){
        await this.toogleLoadingThemes()
        await axios('http://localhost:3002/themes').then(res => {
            const themes = res.data.themes.map(theme => {
                return {
                    value: theme.name,
                    label: theme.name,
                }
            })

            this.setState({themes})
        })
        this.toogleLoadingThemes()
    }

    async searchArticles(seeMore, forQuery){
        
        if(seeMore){
            await this.setState({page: ++this.state.page})
            await this.toogleLoadingMoreArticles()
        }else{
            await this.toogleLoadingArticles()
        }

        if(forQuery) this.setState({page: 1})

        
        const url = `${api_cm_web_service}/articles?query=${this.state.search}&page=${this.state.page}&limit=${this.state.limit}&theme=${this.state.theme}&category=${this.state.theme}&author=${this.state.author}`
        await axios(url).then(res => {
            let articles = res.data.articles
            
            if(seeMore){
                articles = this.state.articles
                articles.push(...res.data.articles)
            }
            
            this.setState(
                {
                    articles,
                    count: res.data.count,
                    limit: res.data.limit,
                }
            )
        })
        if(seeMore){
            this.toogleLoadingMoreArticles()
        }else{
            this.toogleLoadingArticles()
        }
    }

    componentWillMount(){
        if(this.props.location && this.props.location.search){
            const obj = queryString.parse(this.props.location.search)
            this.setState({search: obj.q})
        }
        
    }

    componentDidMount(){
        this.getThemes()
        this.searchArticles()
    }
    
    render() { 
        return ( 
            <Grid container className="articles-container">
                <Drawer className="drawer" open={this.state.drawer} onClose={() => this.setState({drawer: false})} >
                    { this.state.loadingThemes && 
                        <Box p={2} display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                            <figure>
                                <img src={LoadingEllipsis} width="100%" alt="Carregando..."/>
                                <p>Carregando filtros, por favor aguarde...</p>
                            </figure>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small>
                            </Box>
                        </Box>
                    }
                    { this.state.themes.length > 0 && !this.state.loadingThemes &&
                        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                            <Box display="flex" flexDirection="column">
                                <Box className="drawer-header" display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="150px">
                                    <img src="..." width="180"
                                        alt="Logo"
                                    />
                                    <Box display="flex">
                                        <Icon color="secondary">filter_list</Icon>
                                        <small className="light-color">Filtros</small>
                                    </Box>
                                </Box>
                                <Box p={2}>
                                    <Box mb={3}>
                                        <small>Autor</small>
                                        <TextField value={this.state.author} onChange={(event) => this.handleChange(event, 'author') } fullWidth />
                                    </Box>
                                    <Box>
                                        <small>Tema</small>
                                        <Select
                                            native
                                            value={this.state.theme}
                                            onChange={(event) => this.handleChange(event, 'theme')}
                                            fullWidth
                                            inputProps={{
                                                name: 'theme',
                                                id: 'articles_theme',
                                            }}
                                        >
                                            <option value=""></option>
                                            { this.state.themes.length > 0 && this.state.themes.map(theme => (
                                                    <option value={theme.value} key={theme.value}>{theme.label}</option>
                                                ))
                                            }
                                        </Select>
                                    </Box>
                                </Box> 
                            </Box>
                            <Box p={2} mt={3} mb={3}> 
                                <Box mb={2}>
                                    <Button color="secondary" variant="contained" size="small" fullWidth onClick={() => {this.searchArticles(false, true); this.toogleDrawer();}}>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <Box mr={1} display="flex" alignItems="center">
                                                <Icon>done</Icon>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                Confirmar
                                            </Box>
                                        </Box>
                                    </Button>
                                </Box>
                                <Box>
                                    <Button color="secondary" variant="outlined" size="small" fullWidth onClick={() => this.toogleDrawer()}>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <Box mr={1} display="flex" alignItems="center">
                                                <Icon>exit_to_app</Icon>
                                            </Box>
                                            <Box display="flex" alignItems="center">
                                                Esconder
                                            </Box>
                                        </Box>
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    }
                </Drawer>
                <Grid item xs={12} className="hud-top-bar">
                    <Grid item xs={2} sm={1} className="hud-top-bar-icon">
                        <IconButton onClick={() => this.toogleDrawer()}>
                            <Icon>filter_list</Icon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={10} sm={11} className="hud-top-bar-search">
                        <SearchBar
                            value={this.state.search}
                            onChange={(search) => this.setState({ search })}
                            onRequestSearch={() => this.searchArticles(false, true)}
                            onCancelSearch={() => this.setState({ search: '' })}
                            placeholder="Pesquisar"
                            className="search-input"
                            id="search-input"
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box display="flex" justifyContent="center" alignItems="center" mr={3} ml={3}>
                        <Box display="flex" alignItems="center" mr={1}>
                            <FontAwesomeIcon icon={faQuestionCircle} size="1x" color="rgba(245, 0, 87,1)" />
                        </Box>
                        <Box display="flex" alignItems="center">
                            <small>Informe o assunto desejado e pressione o enter do seu teclado para confirmar a busca.</small>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box width="100%" mt={2} mb={2}>
                        <Divider />
                    </Box>
                </Grid>
                <Grid item xs={12} className="search-results">
                    { this.state.articles.length > 0 && !this.state.loadingArticles && this.state.articles.map(article => (
                            <ArticleBox article={article} key={article._id}/>
                        ))
                    }
                    { this.state.articles.length > 0 && this.state.articles.length !== this.state.count && !this.state.loadingArticles &&
                        <Grid item xs={12} className="see_more_area">
                            { this.state.loadingMoreArticles &&
                                <Box display="flex" justifyContent="center" alignItems="center" mb={4} mt={4}>
                                    <Box mr={1}>
                                        <CircularProgress color="secondary" size={15} />
                                    </Box>
                                    <p>Carregando mais artigos...</p>
                                </Box>
                            }
                            <Button color="secondary" variant="outlined" size="medium" disabled={this.state.loadingMoreArticles} onClick={() => this.searchArticles(true)}>
                                Ver mais
                            </Button>
                        </Grid>
                    }
                    <FloatingButton action={() => document.documentElement.scrollTop = 0}/>
                    {
                        this.state.loadingArticles &&
                            <Grid item xs={12} className="loading_indicator">
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <figure>
                                            <img src={LoadingEllipsis} alt="Carregando..."/>
                                            <figcaption><small>Loading ellipsis by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small></figcaption>
                                    </figure>
                                    <p>Carregando artigos, por favor aguarde...</p>
                                </Box>
                            </Grid>
                    }
                    {
                        this.state.articles.length === 0 && !this.state.loadingArticles &&
                            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
                                <FontAwesomeIcon icon={faFilter} size="5x" color="rgba(245, 0, 87,0.5)" />
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <p>Ops, parece que não conseguimos encontrar nenhum resultado</p>
                                    <p>Caso necessário você pode alterar seus <strong className="high_light_text" onClick={() => this.toogleDrawer()}>filtros de busca</strong> ou alterar a informação no <strong className="high_light_text" onClick={() => {document.documentElement.scrollTop = 0; document.querySelector('#search-input').focus();}}>campo de pesquisa</strong>.</p>
                                </Box>
                            </Box>
                    }
                </Grid>
            </Grid>
        );
    }
}

export default ArticlesList