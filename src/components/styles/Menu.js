export const styles = theme => ({
    menu: {
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
        background: 'linear-gradient(to right, #414345, #232526)',
        backgroundColor: 'rgb(0,0,0)',
        borderBottom: '1px solid #ccc',
    },
    menuItems:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuLogo: {
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    menuButtonContent: {
        display: 'flex',
        alignItems: 'center',
    },
    /* menuItem: {
        color: '#ccc',
        fontSize: '1.1rem',
        fontWeight: 'bold', 
    },*/
    iconButtonMenu: {
        marginRight: '10px',
        color: '#f50057'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    drawerLink: {
        color: '#fff',
        textDecoration: 'none',
    },
    menuLink: {
        color: '#ccc',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        textDecoration: 'none',
        padding: 23,
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, .2)',
            color: 'rgba(255, 255, 255, .8)' 
        }
    },
    buttonLink:{
        color: 'inherit',
        textDecoration: 'none',
    },
    drawer: {
        backgroundColor: 'transparent',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    drawerButton: {
        display: 'flex',
        justifyContent: 'center',
        height: 100,
        fontSize: '1.3rem',
    },
    drawerFooter: {
        display: 'flex',
        justifyContent: 'center',
    },
    logo:{
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        background: 'linear-gradient(to right, #414345, #232526)',
        backgroundColor: '#000',
        height: 100
    },
    hide: {
        display: 'none'
    },
    fakeLink: {
        cursor: 'pointer'
    }
})

export default {styles}