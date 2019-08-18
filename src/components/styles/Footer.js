export const styles = theme => ({
    footerContainer: {
        width: '100%',
        background: 'linear-gradient(to right, #414345, #232526)',
        backgroundColor: '#000',
        minHeight: 160,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    footerContainerTop: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    footerContainerBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
    },
    fakeLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        marginTop: 2,
        marginBottom: 2,
        cursor: 'pointer',
        padding: 10,
        borderRadius: '20px',
        fontSize: '1.1rem',
        '&:hover':{
            backgroundColor: 'rgba(255,255,255,.05)'
        }
    },
    footerText:{
        color: '#fff',
        fontWeight: 800,
    }
})

export default {styles}