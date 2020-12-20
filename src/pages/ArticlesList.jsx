import React, { Component } from 'react'

import 'react-checkbox-tree/lib/react-checkbox-tree.css'

import { Box, Grid, Drawer, Icon, Button,
        IconButton, CircularProgress,
        Select, TextField, Divider} from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFilter, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import ArticleBox from '../components/ArticleBox.jsx'
import FloatingButton from '../components/FloatingButton.jsx'

import SearchBar from 'material-ui-search-bar'

import queryString from 'query-string'

import axios from 'axios'

import './css/ArticlesList.css'



class ArticlesList extends Component {
    state = { 
        themes: [],
        loadingThemes: false,

        articles: [],
        page: 1,
        count: 0,
        limit: 10,
        loadingArticles: false,
        loadingMoreArticles: false,
        author: '',
        theme: '',
        error: false,

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
        const url = `/themes`
        await axios(url).then(res => {
            if (res.data && res.data.themes) {
                const themes = res.data.themes.map(theme => {
                    return {
                        value: theme.name,
                        label: theme.name,
                    }
                });

                this.setState({themes})
            }
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

        
        const url = `/articles?query=${this.state.search}&page=${this.state.page}&limit=${this.state.limit}&theme=${this.state.theme}&category=${this.state.theme}&author=${this.state.author}`
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
                    error: false,
                }
            )
        }).catch(error => this.setState({error: true}))


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
                        <Box p={2} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" height="100%">
                            <figure>
                                <img src={null} width="100%" alt="Carregando..."/>
                                <p>Carregando filtros, por favor aguarde...</p>
                            </figure>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <small>Powered by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small>
                            </Box>
                        </Box>
                    }
                    { this.state.themes.length > 0 && !this.state.loadingThemes &&
                        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
                            <Box display="flex" flexDirection="column">
                                <Box className="drawer-header" display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="150px">
                                    <Box display="flex">
                                        <Icon style={{marginRight: '5px', color: '#fff'}}>code</Icon>
                                        <h3 className="coder-mind">
                                            <span style={{color: '#fff'}}>Coder Mind</span>
                                        </h3>
                                    </Box>
                                </Box>
                                <Box p={2}>
                                    <Box mb={3}>
                                        <small>Autor</small>
                                        <TextField value={this.state.author} onChange={(event) => this.handleChange(event, 'author') } fullWidth />
                                    </Box>
                                    <Box>
                                        <small>Assunto</small>
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
                                    <Button style={{color: '#fff'}} variant="contained" size="small" fullWidth onClick={() => {this.searchArticles(false, true); this.toogleDrawer();}} className="coder-mind-button">
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
                                    <Button className="coder-mind-button-outlined" variant="outlined" size="small" fullWidth onClick={() => this.toogleDrawer()}>
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
                            <Icon style={{color: '#8a05be'}}>filter_list</Icon>
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
                            <FontAwesomeIcon icon={faQuestionCircle} size="1x" color="#8a05be" />
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
                            <ArticleBox article={article} key={article.uri}/>
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
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <Button className="coder-mind-button-outlined" variant="outlined" size="medium" disabled={this.state.loadingMoreArticles} onClick={() => this.searchArticles(true)}>
                                    Ver mais
                                </Button>
                            </Box>
                        </Grid>
                    }
                    <FloatingButton action={() => window.scrollTo(0,0)}/>
                    {
                        this.state.loadingArticles &&
                            <Grid item xs={12}>
                                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                    <figure>
                                            <img src={null} alt="Carregando..."/>
                                            <figcaption><small>Powered by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small></figcaption>
                                    </figure>
                                    <p>Carregando artigos, por favor aguarde...</p>
                                </Box>
                            </Grid>
                    }
                    {
                        this.state.articles.length === 0 && !this.state.loadingArticles && !this.state.error &&
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center" alignItems="center" flexWrap="wrap" mt={4} mb={4} p={3}>
                                    <FontAwesomeIcon icon={faFilter} size="5x" color="#8a05be" />
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                        <h3>Ops! parece que não conseguimos encontrar nenhum resultado</h3>
                                        <h3>Caso necessário você pode alterar seus <strong className="high_light_text" onClick={() => this.toogleDrawer()}>filtros de busca</strong> ou alterar a informação no <strong className="high_light_text" onClick={() => {document.documentElement.scrollTop = 0; document.querySelector('#search-input').focus();}}>campo de pesquisa</strong>.</h3>
                                    </Box>
                                </Box>
                            </Grid>
                    }
                    { this.state.error && !this.state.loadingArticles && 
                        <Grid item xs={12}>
                            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                <Box display="flex" alignItems="baseline" justifyContent="center" flexDirection="column" p={2}>
                                    <Box display="flex" alignItems="center" flexWrap="wrap">
                                        <Box display="flex" justifyContent="center" alignItems="center" className="error-icon-area">
                                            <Icon color="secondary" className="error-icon">healing</Icon>
                                        </Box>
                                        <Box display="flex" justifyContent="center" alignItems="center">
                                            <h2 className="message-error">Ops! ocorreu um erro ao buscar nossos artigos. Já tentou atualizar a página?</h2>
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
                </Grid>
            </Grid>
        );
    }
}

export default ArticlesList