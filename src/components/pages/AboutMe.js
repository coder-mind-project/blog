import React from 'react'
import Grid from '@material-ui/core/Grid'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import {makeStyles} from '@material-ui/core/styles'
import Divider from  '@material-ui/core/Divider'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReact, faVuejs, faNodeJs, faDev} from '@fortawesome/free-brands-svg-icons'

const useStyles = makeStyles(theme => ({
    line: {
        borderBottom: '1px',
        borderColor: '#ccc',
        width: '100%',
        // borderColor: 'linear-gradient(to right, #bdc3c7, #2c3e50)'
    },
    paper:{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(1)
    },
    tags: {
        margin: theme.spacing(0.5)
    }
}))


const AboutMe = () => {
    const matches = useMediaQuery('(min-width: 1000px)')
    const classes = useStyles()
    return (
        <div>
            <Grid container>
                <Grid item xs={matches ? 8 : 12}>
                    <h1>Seja bem vindo ao Estudante de TI </h1>
                    <p>Este blog possui intuito de manter e divulgar conteúdos acadêmicos para todos os interessados.</p>
                    <p>Focado específicamente em conteúdos de tecnologia, o Estudante de TI foi criado com base em carências de estudos apontados por alunos universitários.</p>
                    <p>Não possuindo comprimisso em formação de alunos, e assim apenas com a intenção de ajudar com contéudos redigidos e vídeos explicativos.</p>
                    <p>Todo material postado poderá ser livremente usado para uso pessoal e comercial (desde que seja feito a devida menção ao trabalho realizado), todo contéudo postado é gratuito! Não precisa criar cadastros ou nada parecido.</p>
                    <p>Esperamos que goste do material, bons estudos!</p>
                    {/* <p>Meu nome é Allan Wanderley, tenho 21 anos e sou atuante na área de computação por mais de 6 anos</p>
                    <p>Este gosto por tecnologia aconteceu por volta de meus 14 anos, bem próximo da época que realizei um curso de montagem de manutenção de micros.</p>
                    <p>O tempo foi passando e em 2016 entrei para um bacharelado de Ciências da computação e a partir de então atuando na área de desenvolvimento de sistemas</p> */}
                </Grid>
                <Grid item xs={matches ? 4 : 12}>
                    <figure>
                        {/* <img src="https://i.imgur.com/8XmJYGa.jpg" width="100%" alt="Allan Wanderley - Estudante de computação e programador"></img> */}
                        {/* <figcaption><p>Allan Wanderley - Estudante de computação e programador</p></figcaption> */}
                    </figure>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container>
                <Grid item xs={matches ? 8 : 12}>
                    <h1>Este é o meu projeto!</h1>
                    <p>Meu nome é Allan Wanderley, tenho 21 anos, atualmente estudando Ciência da Computação e programador em todo o tempo restante.</p>
                    <p>Falando em computação, comecei a partir dos 14 anos. Onde tive um contato mais intensivo com o meu primeiro computador, mais tarde entrei para um curso de montagem e manutenção e a partir de então nunca mais parei de estudar dentro da área.</p>
                    <p>Gosto bastante de arquitetura de computadores e possuo um forte engajamento na área de desenvolvimento de sistemas, onde atualmente me especializo para permanecer atuando profissionalmente.</p>
                    <p>Sempre gostei de ensinar sobre assuntos que julgo conhecer, assim, espero que goste de todo este material disponibilizado.</p>
                    {/* <p>Meu nome é Allan Wanderley, tenho 21 anos e sou atuante na área de computação por mais de 6 anos</p>
                    <p>Este gosto por tecnologia aconteceu por volta de meus 14 anos, bem próximo da época que realizei um curso de montagem de manutenção de micros.</p>
                <p>O tempo foi passando e em 2016 entrei para um bacharelado de Ciências da computação e a partir de então atuando na área de desenvolvimento de sistemas</p> */}
                </Grid>
                <Grid item xs={matches ? 4 : 12}>
                    <figure>
                        <img src="https://i.imgur.com/8XmJYGa.jpg" width="100%" alt="Allan Wanderley - Estudante de computação e programador"></img>
                        <figcaption>
                            <Paper className={classes.paper}>
                                <Chip key={0} icon={<FontAwesomeIcon icon={faReact}/>} label={'React'} className={classes.tag}/>
                                <Chip key={1} icon={<FontAwesomeIcon icon={faVuejs}/>} label={'Vue.js'} className={classes.tag}/>
                                <Chip key={2} icon={<FontAwesomeIcon icon={faNodeJs}/>} label={'Node.js'} className={classes.tag}/>
                                <Chip key={3} icon={<FontAwesomeIcon icon={faDev}/>} label={'Express'} className={classes.tag}/>
                                <Chip key={4} icon={<FontAwesomeIcon icon={faDev}/>} label={'React Native'} className={classes.tag}/>
                                <Chip key={5} icon={<FontAwesomeIcon icon={faDev}/>} label={'MySQL'} className={classes.tag}/>
                                <Chip key={6} icon={<FontAwesomeIcon icon={faDev}/>} label={'MongoDB'} className={classes.tag}/>
                            </Paper>
                        </figcaption>
                    </figure>
                </Grid>
            </Grid>
        </div>
        )
}

export default AboutMe