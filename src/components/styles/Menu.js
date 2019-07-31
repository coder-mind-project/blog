export const styles = theme => ({
    menu: {
        display: 'flex',
        paddingLeft: 10,
        paddingRight: 10,
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
    menuItem: {
        color: '#ccc',
        fontSize: '1.1rem',
        '&:hover': {
            color: '#fff',
        },
        fontWeight: 'bold', 
    },
    iconButtonMenu: {
        marginRight: '10px',
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
        color: 'inherit',
        textDecoration: 'none',
        padding: 23,
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,.1)'
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