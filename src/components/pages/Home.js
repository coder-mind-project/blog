import React from 'react'
import LatestArticles from '../items/homepage/LatestArticles'
import Steper from '../items/global/Stepers'

import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    h2: {
        fontSize: '1.3rem'
    },
    section: {
        display: 'flex',
        flexDirection: 'column'
    },
    latestArticles: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    article: {
        display: 'flex',
        justifyContent: 'center',
    }
}))

const HomePage = () => {
    const classes = useStyles()
    const matchesThousand = useMediaQuery('(min-width: 1200px)')
    const matchesMd = useMediaQuery('(min-width: 845px)')
    
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid className={classes.section} item xs={!matchesThousand ? 12 : 8}>
                    <h2 className={classes.h2}>Últimas postagens</h2>
                    <Grid className={classes.latestArticles} item xs={12}>
                        <Grid item xs={matchesMd ? 6 : 12} className={!matchesMd ? classes.article : ''}>
                            <LatestArticles img="https://i.imgur.com/ZM8Mp0o.png" titleImg="Teoria dos conjuntos" title="Teoria dos conjuntos" description="Neste artigo vamos ver sobre a teoria dos conjuntos dentro da matemática discreta"></LatestArticles>
                        </Grid>
                        <Grid item xs={matchesMd ? 6 : 12} className={!matchesMd ? classes.article : ''}>
                            <LatestArticles img="https://i.imgur.com/9gJsZJ3.png" titleImg="Novidades do ES6" title="O Novo ES6 Chegou!" description="Tudo que você precisar saber sobre o ES6"></LatestArticles>
                        </Grid>
                        <Grid item xs={matchesMd ? 6 : 12} className={!matchesMd ? classes.article : ''}>
                            <LatestArticles img="https://i.imgur.com/VuKaEBI.jpg" titleImg="Introdução a processadores" title="Introdução a processadores" description="Vamos aprender neste artigo o essencial sobre microprocessadores" ></LatestArticles>
                        </Grid>
                        <Grid item xs={matchesMd ? 6 : 12} className={!matchesMd ? classes.article : ''}>
                            <LatestArticles></LatestArticles>
                        </Grid>
                    </Grid>
                </Grid>
                {matchesThousand && <Grid className={classes.section} item xs={4}>
                    <h2 className={classes.h2}>Veja também</h2>
                    <Grid item xs={12}>
                        <Steper/>
                    </Grid>
                </Grid>}
            </Grid>
        </div>
    )
}

export default HomePage