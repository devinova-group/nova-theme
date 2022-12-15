const modal = {
    default: {
        position: 'absolute',
        top: 100,
        left: 500,
        width: '650px',
        height: '272px',
        borderRadius: '12px',
        boxShadow: 'modal',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: ' repeat(3, 1fr) repeat(2, 0)',
        alignItems: 'center',
        background: 'white',
        header: {
            gridArea: '1 / 1 / 2 / 1',
            marginLeft: 15,
            span:{
                marginLeft: 2,
                }
        },
        main: {
            width: '530px',
            height: '79px',
            lineHeight: '27px',
            letterSpacing: '1px',
            textAlign: 'left',
            gridArea:'2 / 1 / 2 / 4',
            color: '#939393',
            marginLeft: 15,
        },
        footer: {
            color:'#585858',
            gridArea:'3 / 1 / 4 / 6',
            marginLeft: 15,
            button: {
                margin: 8
            }
        },

    }
    
}

export default modal