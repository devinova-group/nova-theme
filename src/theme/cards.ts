import { Theme } from 'theme-ui';

const cards: Theme['cards'] = { 
    primary: {
        width: '353px',
        height: '642px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        backgroundColor: 'lightMode.light',
        textAlign: 'left',
        boxShadow: '4px 4px 21px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        
        'img': {
        width: '353px',
        height: '316px',
        borderRadius: '20px 20px 0px 0px',
        },
        'span':{
            width: '100%',
            padding: '0px 6px 6px 24px', 
        },
        
        'button': {
            marginLeft: 8,
        },
    },
    expandable: {
        variant: 'cards.primary',
        width: '353px',
    },
    short: {
        variant: 'cards.primary',
        height: '675px',
    },
    noImgnoBtn: {
        variant: 'cards.primary',
        height: '675px',
    },
    noImg: {

    }


}

export default cards;
