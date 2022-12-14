const modal = {
    default: {
        width: '650px',
        height: '272px',
        borderRadius: '12px',
        boxShadow: 'modal',
        display: 'grid',
        gridTemplateColumns: '0.3fr 1.2fr 2fr 1fr',
        gridTemplateRows: 'repeat(2, 0) 0.5fr 1fr 0.5fr',
        alignItems: 'center',
        background: 'white',
        svg: {
            gridArea: '3 / 1 / 4 / 2', 
            marginLeft: 15
        },
        b: {
            gridArea: '3 / 2 / 4 / 3',
            textAlign: 'left',
            marginLeft: 4,
        },
        p: {
            width: '530px',
            height: '79px',
            lineHeight: '27px',
            letterSpacing: '1px',
            textAlign: 'left',
            gridArea: ' 4 / 1 / 5 / 3',
            marginLeft: 15,
            color: '#939393'
        },
        label: {
            gridArea:'5 / 1 / 6 / 2', 
            svg: {
               marginLeft: 15,
            }
        },
        span: {
            gridArea: '5 / 2 / 6 / 3',
            color: '#939393',
           letterSpacing: '1px',
        },
        strong: {
            color:'#585858', 
            gridArea:'5 / 4 / 6 / 4',
        },
        button: {
            gridArea:' 5 / 5 / 6 / 6',
            margin: 8
        }

    }
    
}

export default modal