import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Badge, Typography, Drawer, Button, List, Divider, } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SelfImprovementIcon from '@material-ui/icons/SelfImprovement';

const drawerWidth = 240;

const newStyles = makeStyles((theme) => ({
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
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(13),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
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
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const classess = newStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={clsx(classess.appBar, {
            [classess.appBarShift]: open,
            })} color="inherit">
               <Toolbar>
               <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classess.menuButton, open && classess.hide)}
          >
            <MenuIcon />
          </IconButton>
                <Typography component={Link} to="/" variant="h6" className={classes.appBar} color="inherit">
                        <img src={logo} alt="Bliss Esthetics" height="55px" className={classes.image} />
                </Typography>
                       
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
        className={classess.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classess.drawerPaper,
        }}
      >
        <div className={classess.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        
        <List>
          {['About', 'Book Appointment',].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <PersonIcon /> : <DateRangeIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        
        
        
        
          {['Services', 'Products'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <DateRangeIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        
        
        
          {['Message Me', 'Directions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <LocationOnIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
        </div>
    )
}

export default Navbar;
