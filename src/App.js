import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MicIcon from '@material-ui/icons/Mic';
import CodeIcon from '@material-ui/icons/Code';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import Grid from '@material-ui/core/Grid';
import Sidebar from './components/sidebar';
import Loading from './components/loading';
import Podcast from './components/podcast';
import Talks from './components/talks';
import About from './components/about';
import Projects from './components/projects';
import './App.css';

const drawerWidth = 300;
const styles = (theme) => ({
  root: {
    display: 'flex',
    fontFamily: "Roboto Mono",
    height: "inherit"
  },
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
  title: {
    fontFamily: "Roboto Mono"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    backgroundColor: "#3e3e3e"
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
});

// TODO: Move component hard-coded data into Cloud Firestore

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loading: true,
      authors: []
    };
  }

  componentDidMount() {
    fetch('/api/author', { method: 'GET' })
    .then(res => res.json())
    .then(authors => {
      this.setState({
        authors,
        loading: false
      });
    })
    .catch(err => err);
  }

  render() {
    const { classes } = this.props;
    const { open, loading, authors } = this.state;

    return (
      <div className={classes.root}>
      {loading ? <Loading /> : (
        <>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar>
              <Grid container className={classes.toolbar}>
                <Grid item xs={12} lg={9}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => this.setState({ open: true }) }
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
          <Sidebar open={open} setOpen={status => this.setState({ open: status })} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <section id="about_section">
              <About authors={authors} />
            </section>
            <section id="projects_section">
              <Projects />
            </section>
            <section id="talks_section">
              <Talks />
            </section>
            <section id="podcast_section">
              <Podcast />
            </section>
            <footer className="footer">
              <p>Developed with</p>
              <FavoriteIcon fontSize="small" style={{ color: 'rgb(100, 255, 218)' }} />
              <p>by</p>
              <a href="mailto:pshin518@gmail.com">Patti Shin</a>
            </footer>
          </main>
        </>
      )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

