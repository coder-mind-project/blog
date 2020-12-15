import React, {Component} from 'react'
import { Grid, Box } from '@material-ui/core'
import axios from 'axios'
import Loading from '../assets/loading.gif'
import { environment } from '../config/environment'
class Author extends Component{

    state = {
        author: null,
        isLoading: false,
        error: {msg: '', status: false }
    }

    componentDidMount(){
        this.getAuthor()
    }

    async getAuthor(){
        const url = `${environment.api}/authors/${this.props.match.params.id}`
        
        this.toogleLoading()

        await axios(url).then( res => {
            this.setState({
                author: res.data
            })
        }).catch(() => this.setState({error: {msg: 'Ops, ocorreu um erro ao recuperar as informações do autor', status: true}}))

        this.toogleLoading()
    }

    toogleLoading(){
        this.setState({isLoading: !this.state.isLoading})
    }

    render(){
        return (
            <Grid>
                { this.state.isLoading && 
                    <Grid className="author-wrapper">
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
                            <figure>
                                <img src={Loading} alt="Carregando..."/>
                                <p>Obtendo as informações do autor, por favor aguarde...</p>
                            </figure>
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <small className="refer">Powered by <a href="https://loading.io" rel="noopener noreferrer" target="_blank">loading.io</a></small>
                            </Box>
                        </Box>
                    </Grid>
                }

                { !this.state.isLoading && 
                    <Grid></Grid>
                }

            </Grid>
        )
    }
}

export default Author