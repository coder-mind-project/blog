import React, { Component } from 'react'
import { Grid, ExpansionPanel, ExpansionPanelSummary, 
        Icon, ExpansionPanelDetails, Box } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons' 
class Faq extends Component {
    state = { 
    }

    render() { 
        return ( 
            <Grid item xs={12} className="container">
                <Box mb={5}>
                    <h1>FAQ</h1>
                    <small>Perguntas frequentes</small>
                </Box>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                    expandIcon={<Icon>expand_more</Icon>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h3>Vocês tem canal no youtube?</h3>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <p>
                        Sim, você pode estar acessando clicando no logotipo do youtube ao lado <a href="https://youtube.com/"> <FontAwesomeIcon icon={faYoutube} size="xs" color="red"/></a> <br/>
                        Porém, nosso youtube trabalha em comunhão ao site, isto é, o canal serve como um <strong><i>repositório</i></strong> de videos para melhorar o nosso material publicado aqui.
                    </p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        )
    }
}

export default Faq