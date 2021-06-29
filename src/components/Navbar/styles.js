import { makeStyles, fade } from '@material-ui/core/styles';


const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    backgroundColor: "#F8B8AC",
    display: 'flex',
    justifyContent: 'center',
    
    [theme.breakpoints.up('sm')]: {
      
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    
  },
  
  grow: {
    flexGrow: 1,
  },

}));