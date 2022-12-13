const toaster = {
primaryV1:{
    width: "400px",
    height: "48px",
    backgroundColor: "#b9dfbb",
    display: "grid",
    gridTemplateColumns: '0.2fr 1fr 0.5fr 0.3fr',
    gridTemplateRows: '1fr 1fr 1fr 1fr',
    textAlign: 'left',
    alignItems: 'center',
    borderLeft: '4px solid #26962B',
    boxShadow: 'toaster',
    borderRadius: '2px',
    margin: 8,
    'svg:nth-of-type(1)':{
    width: "22px",
    height: "22px",
    gridArea: '2 / 1 / 4 / 2',
    marginLeft: 4,
    marginRight: 4,
    },

    'svg:nth-of-type(2)':{
        gridArea: '2 / 5 / 4 / 6',
        marginRight: 4,
        marginLeft: 4,
    },
    'span:nth-of-type(1)': {
        gridArea: '2 / 2 / 3 / 3',
        color: 'black',
    },
    'span:nth-of-type(2)': {
        color: '#585858',
        fontSize: '11px',
        gridArea: '3 / 2 / 4 / 3', 
    },
    'span:nth-of-type(3)': {
        color: '#585858',
        gridArea: '2 / 4 / 4 / 5',
    },
},
warningV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#f1e3d1",
    borderLeft: '4px solid #cc9428',
},
errorV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#eec7cc",
    borderLeft: '4px solid #f03738',
},
noticeV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#bdcee7",
    borderLeft: '4px solid #4b88cf',
},
infoV1: {
    variant: "toaster.primaryV1",
    backgroundColor: "#d6d5da",
    borderLeft: '4px solid #585858',
},

primaryV2:{
    variant: "toaster.primaryV1",
    backgroundColor: '#3cc13b',
    borderLeft: 'none',
    
    'span:nth-of-type(1)': {
        gridArea: '2 / 2 / 4 / 3',
        color: 'white',
        alignSelf: 'center',
    },
    'span:nth-of-type(2)': {
        gridArea: '2 / 4 / 4 / 5',
        color: 'white',
    },
},
warningV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#f5d49d",
},
errorV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#ef6b6e",
},
noticeV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#6396d3",
},
infoV2: {
    variant: "toaster.primaryV2",
    backgroundColor: "#767576",
},
}

export default toaster