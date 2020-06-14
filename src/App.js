import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import MicIcon from '@material-ui/icons/Mic';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import Sidebar from './components/sidebar';
import Loading from './components/loading';
import './App.css';

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: 'flex',
    fontFamily: "Roboto Mono",
    height: "inherit"
  },
  toolbar: {
    paddingRight: 0,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'rgb(10, 25, 47)',
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
    backgroundColor: '#e0e0e0'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
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
    fetch(
      'http://localhost:8080/api/author',
      { method: 'GET' }
    )
    .then(res => res.json())
    .then(authors => {
      this.setState({
        authors,
        loading: false
      });
    })
    .catch(err => err);
    
    fetch(
      'http://localhost:8080/api/characters',
      { method: 'GET' }
    )
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
              <IconButton
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={() => this.setState({ open: true }) }
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
              >
                <MenuIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </IconButton>
              <a href="#talks_section">
                <IconButton color="inherit">
                  <SlideshowIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="#podcast_section">
                <IconButton color="inherit">
                  <MicIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
            </Toolbar>
          </AppBar>
          <Sidebar open={open} setOpen={status => this.setState({ open: status })} />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <section id="about_section">
              <Container maxWidth="lg" className={classes.container}>
                <h3>About</h3>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        {authors.map(a => a.description)}
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                      {characters.map(c => c.name)}
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      hello
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <div className={classes.appBarSpacer} />
            <section id="talks_section">
              <Container maxWidth="lg" className={classes.container}>
                <h3>Talks</h3>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      Talks
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </section>
            <div className={classes.appBarSpacer} />
            <section id="podcast_section">
              <Container maxWidth="lg" className={classes.container}>
                <h3>Podcast</h3>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      Podcast
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
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

