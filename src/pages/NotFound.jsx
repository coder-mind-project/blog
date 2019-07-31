import React, { Component } from 'react'
import { Grid, Box, Button } from '@material-ui/core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import './css/NotFound.css'
class NotFound extends Component {

    render() { 
        return ( 
            <Grid item xs={12} className="not-found-container">
                <Box display="flex" className="not-found-container">
                    <Grid item xs={12} md={3} className="not-found-icon-container">
                        <FontAwesomeIcon icon={faExclamationTriangle} color="#f50057" size="7x"/>
                    </Grid>
                    <Grid item xs={12} md={9} className="not-found-info-container">
                        <Box>
                            <Box width="100%" className="not-found-icon-sm">
                                <FontAwesomeIcon icon={faExclamationTriangle} color="#f50057" size="7x"/>
                            </Box>
                            <Box>
                                <h1 className="not-found-info">Ops! Página não encontrada</h1>
                                <p className="not-found-info">Tenha certeza que informou o link corretamente, caso você tenha sido redirecionado a esta página sem ter alterado o link, pode entrar em contato clicando <strong className="fake-link" onClick={() => window.location.href = "/sobre#contact"}><u>aqui</u></strong></p>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={5} mb={5}>
                            <Link to="/">
                                <Button color="secondary" variant="contained">Voltar a página principal</Button>
                            </Link>
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        )
    }
}

export default NotFound