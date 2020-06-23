import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Sidebar from './components/sidebar';
import Loading from './components/loading';
import Podcast from './components/podcast';
import Talks from './components/talks';
import About from './components/about';
import Header from './components/header';
import Projects from './components/projects';

import { getAuthor } from './actions/author';

import './App.css';

const styles = (theme) => ({
  root: {
    display: 'flex',
    fontFamily: "Roboto Mono",
    height: "inherit"
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
      loading: false
    };
  }

  componentDidMount() {
    this.setState({ loading: true })
    
    this.props.getAuthor().then(author => 
      this.setState({ loading: false })
    );
  }

  render() {
    const { classes, authors} = this.props;
    const { open, loading } = this.state;

    return (
      <div className={classes.root}>
      {loading ? <Loading /> : (
        <>
          <CssBaseline />
          <Header open={open} classes={classes} setOpen={status => this.setState({ open: status })} />
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

const mapStateToProps = state => ({
  authors: state.author.authors
});

const mapDispatchToProps = dispatch => ({
  getAuthor: () => dispatch(getAuthor())
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

