export const styles = theme => ({
    footerContainer: {
        width: '100%',
        backgroundColor: '#000',
        minHeight: 160,
        display: 'flex',
        flexWrap: 'wrap',
    },
    footerContainerChildStart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
    },
    footerContainerChildEnd: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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