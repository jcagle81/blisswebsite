import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton, Badge, Drawer, List, } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import { useTheme } from '@material-ui/core/styles';
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
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
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
            <AppBar position="fixed" className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
            })} color="inherit">
               <Toolbar>
               <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                    >
                    <MenuIcon />
                </IconButton>
                
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
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <List>
                <ListItem button key="Home" component={Link} to="/">
                <ListItemIcon><img className={classes.logo} src={logo}/></ListItemIcon>
                <ListItemText primary="Home" />
                </ListItem>
            </List>
            <List>
                <ListItem button key="About" component={Link} to="/about">
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary="About" />
                </ListItem>
                <a className={classes.hyperlink} href="https://square.site/book/A525MVMSYAYVK/bliss-esthetics-colo-spgs-co">
                    <ListItem button key="Book Appointment">
                    <ListItemIcon><DateRangeIcon /></ListItemIcon>
                    <ListItemText primary="Book Appointment" />
                    </ListItem>
                </a>
                <ListItem button key="Services" component={Link} to="/services">
                <ListItemIcon><SelfImprovementIcon /></ListItemIcon>
                <ListItemText primary="Services" />
                </ListItem>
                <ListItem button key="Products" component={Link} to="/products">
                <ListItemIcon><ShoppingBasketIcon /></ListItemIcon>
                <ListItemText primary="Products" />
                </ListItem>
                <a className={classes.hyperlink} href="mailto:tmlosee84@gmail.com"> 
                    <ListItem button key="Message Me">
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary="Message Me" />
                    </ListItem>
                </a> 
                <ListItem button key="Directions" component={Link} to="/">
                <ListItemIcon><LocationOnIcon /></ListItemIcon>
                <ListItemText primary="Directions" />
                </ListItem>
            </List>
        </Drawer>
        </div>
    )
}

export default Navbar;
