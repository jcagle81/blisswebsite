import { makeStyles } from '@material-ui/core/styles';


const drawerWidth = 0;
const newDrawerWidth = 240;
export default makeStyles((theme) => ({
  
  root: {
    display: 'flex',
  },

  appBar: {
    boxShadow: 'none',
        backgroundColor: "#F8B8AC",
        display: 'flex',
        justifyContent: 'center',
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    [theme.breakpoints.up('sm')]: {
      
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  logo: {
    height: '2em',
  },  
  grow: {
    flexGrow: 1,
  },
  hyperlink: {
    textDecoration: 'none',
    color: 'black',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: newDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: newDrawerWidth,
    backgroundColor: "#F8B8AC",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "#F8B8AC",
    padding: theme.spacing(0, 1),
    
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -newDrawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));