import active from "./icons/activeAvatar.svg";
import pencil from './icons/pencilAvatar.svg'
import notDisturb from './icons/notdisturb.svg'
import away from './icons/away.svg'
import notavailable from './icons/notavailable.svg'
import error from './icons/error.svg'



const avatars = {
  default: {
    width: "64px",
    height: "64px",
    position: "relative",
    borderRadius: "50%",
    backgroundColor: "#6044b5",
    margin: 10,
    h6: {
      position: "absolute",
      top: 7,
      left: 7,
      color: "white",
    },
    img: {
        borderRadius: "50%",
    }
  },
  active: {
    variant: "avatars.default",
    div: {
      position: "absolute",
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      backgroundImage: `url(${active})`,
    },
  },
  edit: {
    variant: "avatars.active",
    div: {
      position: "absolute",
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      backgroundImage: `url(${pencil})`,
    },
  },
  notdisturb: {
    variant: "avatars.active",
    div: {
        position: "absolute",
        bottom: 0,
        right: 2,
        width: "18px",
        height: "18px",
        backgroundImage: `url(${notDisturb})`,
      },
  },
  busy: {
    variant: "avatars.active",
    div: {
        position: "absolute",
        bottom: 0,
        right: 2,
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundColor: '#c12945',
      },
  },
  away: {
    variant: "avatars.active",
    div: {
        position: "absolute",
        bottom: 0,
        right: 2,
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundImage: `url(${away})`,
      },
  },
  notAvailable: {
    variant: "avatars.active",
    div: {
        position: "absolute",
        bottom: 0,
        right: 2,
        width: "18px",
        height: "18px",
        borderRadius: "50%",
        backgroundImage: `url(${notavailable})`,
      },
  },
  error: {    
    variant: "avatars.active",
  div: {
      position: "absolute",
      bottom: 0,
      right: 2,
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundImage: `url(${error})`,
    },
},
};

export default avatars;
