import React, { Component } from 'react'
import { Grid, Divider, Box, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'
class Privacity extends Component {
    state = { 
        email: '',
        msg: '',
        sending: false,
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
            /* ... */
        this.changeStateSending()
    }

    render() { 
        return ( 
            <Grid item xs={12} className="container">
                <h1>Políticas de uso</h1>
                <p>Este material é escrito e revisto pelo seus autores. Todo material de estudo e projetos apresentados serão de 100% (cem por cento) autoral do respectivo autor, caso esteja assumindo consumir um trabalho de terceiros estará claramente definido durante o conteúdo publicado. </p>
                <p>Em caso de reinvidicação, fique a vontade para entrar em contato com o autor da publicação ou use nossa plataforma clicando <a href="/sobre#contact" style={{color: '#f50057', fontWeight: 600, textDecoration: 'underline'}}>aqui</a>.</p>
                <p>Nosso material é 100% gratuíto para o leitor, não será necessário criar contas ou fornecer informações para consumir nosso material.</p>
                <p>Para efeitos comerciais, academicos, profissionais ou quaisquer outros é gratuíto, desde que seja feita a devida menção ao nosso trabalho, esta pode ser feita de diversas formas. Desde compartilhando nossa plataforma em um final de material, ou realizando menções durante.</p>
                <p>Para melhor compreendimento podemos citar 2 ocasiões:</p>
                <ul>
                    <li>Vídeos na internet onde se foi usado o nosso material de base - Deverá ser mencionado em qualquer momento na gravação do vídeo que o material de estudo que se permitiu a gravação do vídeo foi retirado em nosso site, indicando ao espectador que possa visitar para visualizar mais postagens.</li>
                    <li>Trabalhos escolares - Deverá ser colocado na parte de <strong>referências</strong> indicando ao docente que o material de estudo foi retirado integralmente ou parcialmente de nosso site.</li>
                </ul>
                <p>Contamos com a colaboração de todos para se seguir criteriosamente essas regras, trabalhamos duro para manter o melhor cenário possível. Ajudando todos que queiram, logo é extremamente razoável que faça as devidas referências, não ganhamos nada com a criação do material.</p>
                <p>Esperamos que compreenda.</p>
                <Box mt={3} mb={3}>
                <Divider />

                </Box>
                <h1>Politicas de privacidade</h1>

                <p>Para que seja possível que ocorra a captura das avaliações de nossas postagens obtemos informações relacionadas a sua geolocalização, isso é, para garantir que sua avaliação seja válida. Esta informação encontra-se em caráter privativo, ou seja, jamais iremos compartilhar essa informação com terceiros ou quaisquer outros interessados.</p>
                <p>Fornecendo informações você está assumindo que confia plenamente em nossa plataforma para manter seus dados seguros. Todo tipo de informação cujo julgamento seja privativo não será divulgado por nós.</p>
                <p>Ao fornecer as informações para comentar em nossas postagens, está assumido que <strong>seu e-mail não será publico</strong>.</p>
                <p>Somente o autor poderá ver esta informação, informações como <strong>nome</strong> e <strong>mensagem</strong> estarão publicas para qualquer leitor visualizar.</p>
                <p>Ao realizar comentários, se a plataforma reconhecê-lo automáticamente, isto é, não precisar colocar nome e e-mail. Significa que temos uma funcionalidade para deixá-lo com maior comodidade</p>
                <p><strong>Não guardamos de forma nenhuma esses dados, os mesmos permanescem em seu navegador.</strong></p>
                <p>O que simplesmente ocorre é que conseguimos entender que aqueles dados estão no seu navegador e os utilizamos para lhe ajudar.</p>
                <br />
                <p><strong>Ao utilizar nosso site você está de acordo com as políticas de uso e privacidade.</strong></p>
            
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={5} mb={5}>
                    <Link to="/">
                        <Button color="secondary" variant="contained">Voltar a página principal</Button>
                    </Link>
                </Box>
            </Grid>
        )
    }
}

export default Privacity