import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import CodeIcon from '@material-ui/icons/Code';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 300;
const styles = (theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbarItem: {
    display: "inline-flex",
    justifyContent: "flex-end",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'black',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth-1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
});

class Header extends Component {
  render() {
    const { classes, open, setOpen} = this.props;

    return (
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar>
          <Grid container className={classes.toolbar}>
            <Grid item xs={12} lg={9}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={() => setOpen(true)}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </IconButton>
              <a href="#projects_section">
                <IconButton className="menuButton">
                  <CodeIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="#talks_section">
                <IconButton className="menuButton">
                  <SlideshowIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="#podcast_section">
                <IconButton className="menuButton">
                  <MicIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
            </Grid>
            <Grid item xs={"auto"} lg={3} className={classes.toolbarItem}> 
              <p>{"#blacklivesmatter"}</p>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);

