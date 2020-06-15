import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import CodeIcon from '@material-ui/icons/Code';
import SlideshowIcon from '@material-ui/icons/Slideshow';
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
    backgroundColor: "#a5b7ff"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
  fixedHeight: {
    height: 240,
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      loading: true,
      authors: [],
      characters: []
    };
  }

  componentDidMount() {
    // Author
    fetch('/api/author', { method: 'GET' })
    .then(res => res.json())
    .then(authors => {
      this.setState({
        authors,
        loading: false
      });
    })
    .catch(err => err);
    
    // Character list
    fetch('/api/characters',{ method: 'GET' })
    .then(res => res.json())
    .then(data => this.setState({ characters: data }))
    .catch(err => err);
  }

  render() {
    const { classes } = this.props;
    const { open, characters, loading, authors } = this.state;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
      {loading ? <Loading /> : (
        <>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
              <div>
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
              </div>
              <p>{"#blacklivesmatter"}</p>
            </Toolbar>
          </AppBar>
          <Sidebar open={open} setOpen={status => this.setState({ open: status })} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <section id="about_section">
              <About />
            </section>
            <div className={classes.appBarSpacer} />
            <section id="projects_section">
              <Projects />
            </section>
            <div className={classes.appBarSpacer} />
            <section id="talks_section">
              <Talks />
            </section>
            <div className={classes.appBarSpacer} />
            <section id="podcast_section">
              <Podcast />
            </section>
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

