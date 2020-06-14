import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MicIcon from '@material-ui/icons/Mic';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import avatar from './assets/patti.jpeg';
import './App.css';

const drawerWidth = 240;
const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: '#404040',
    ...theme.mixins.toolbar,
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
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: '#404040',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '0px',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
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
      authors: []
    };
  }

  componentDidMount() {
    fetch(
      'http://localhost:8080/api/author',
      { method: 'GET' }
    )
    .then(res => res.json())
    .then(authors => this.setState({ authors }))
    .catch(err => err);
  }

  render() {
    const { classes } = this.props;
    const { open, authors } = this.state;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <div className={classes.root}>
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
              <MenuIcon />
            </IconButton>
            <IconButton color="inherit">
              <SlideshowIcon />
            </IconButton>
            <IconButton color="inherit">
              <MicIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={() => this.setState({ open: false }) }>
              <ChevronLeftIcon style={{ color: 'white' }}/>
            </IconButton>
          </div>
          <div className="authorCard">
            <div className="authorCardTop">
              <div className="authorAvatarWrapper">
                <img src={avatar} className="avatar" alt="avatar" />
              </div>
            </div>
            <div className="authorCardBody">
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                patti shin
              </Typography>
              <div className="authorSocialMedia">
                <a href="https://github.com/pattishin" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <GitHubIcon style={{ color: 'white' }} />
                  </IconButton>
                </a>
                <a href="https://twitter.com/pattishin" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <TwitterIcon style={{ color: 'white' }} />
                  </IconButton>
                </a>
                <a href="https://www.linkedin.com/in/pattishin" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <LinkedInIcon style={{ color: 'white' }} />
                  </IconButton>
                </a>
              </div>
            </div>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={3}>
                <Paper className={fixedHeightPaper}>
                  {authors && authors[0]
                    ? authors[0].description
                    : ''
                  }
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                  hello
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  hello
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

