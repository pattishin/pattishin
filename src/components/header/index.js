import { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '../../utils/withStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Grid2 from '@mui/material/Grid2';
import MenuIcon from '@mui/icons-material/Menu';
import MicIcon from '@mui/icons-material/Mic';
import CodeIcon from '@mui/icons-material/Code';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import styles from './styles';

class Header extends Component {
  render() {
    const { classes, open, setOpen} = this.props;

    return (
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar>
          <Grid2 container className={classes.toolbar}>
            <Grid2 size={{ xs: 12, lg: 9 }}>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="Open sidebar"
                onClick={() => setOpen(true)}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon style={{ color: '#7bc950' }} />
              </IconButton>
              <a href="#projects_section">
                <IconButton className="menuButton" aria-label="Projects">
                  <CodeIcon style={{ color: '#7bc950' }} />
                </IconButton>
              </a>
              <a href="#talks_section">
                <IconButton className="menuButton" aria-label="Talks">
                  <SlideshowIcon style={{ color: '#7bc950' }} />
                </IconButton>
              </a>
              <a href="#podcast_section">
                <IconButton className="menuButton" aria-label="Podcast">
                  <MicIcon style={{ color: '#7bc950' }} />
                </IconButton>
              </a>
            </Grid2>
            <Grid2 size={{ xs: "auto", lg: 3 }} className={classes.toolbarItem}>
              <p>{"#blacklivesmatter"}</p>
            </Grid2>
          </Grid2>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
