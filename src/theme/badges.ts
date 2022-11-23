import { Theme } from 'theme-ui';

const badges: Theme['badges'] = {
    primary: {
        width: '69px',
        height: '34px',
        fontFamily: 'body.1',
        fontWeight: 'body.2',
        fontSize: 0,
        color: 'badge.primary',
        border: '1px solid',
        borderColor: 'rgba(75, 136, 207, 0.1)',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
        backgroundColor: 'transparent',
    },
    inActive: {
        variant: 'badges.primary',
        color: 'badge.inActive',
        border: '1px solid',
        borderColor: '#eed9df',
    },
    error: {
        variant: 'badges.primary',
        width: '50px',
        color: 'badge.error',
        border: '1px solid',
        borderColor: '#eae3dd',

    },
    disabled: {
        variant: 'badges.primary',
        width: '73px',
        color: 'badge.disabled',
        border: '1px solid',
        borderColor: '#e4e3e8',
    },
    active: {
        variant: 'badges.primary',
        width: '56px',
        color: 'badge.active',
        backgroundColor: 'badge.activeBg',
        border: '1px solid',
        borderColor: '#dce7df',
    },
    default: {
        variant: 'badges.primary',
        width: '65px',
        backgroundColor: 'bagdes.bg',
        color: 'white',
        border: '1px solid',
        borderColor: '#5e4d8c',
    },
    selected: {
        variant: 'badges.primary',
        width: '73px',
        color: 'badge.active',
        border: '1px solid',
        borderColor: '#eae3dd',
    },
    secondary: {
        variant: 'badges.primary',
        width: '87px',
        color: '#C7BED7',
        backgroundColor: 'badge.defaultBg',
        border: '1px solid',
        borderColor: '#5e4d8c',
    },



}
export default badges;