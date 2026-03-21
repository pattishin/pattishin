import { Component } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Sidebar,
  Loading,
  Talks,
  About,
  Header,
  Blogs,
  Projects,
  Podcast,
  GameStart,
  BlogPost,
} from '../../components';
import { getAuthor } from '../../actions/author';
import './App.css';
import styles from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loading: false,
      gameStarted: false,
    };
    this.handleGameStart = this.handleGameStart.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.getAuthor().then(() => this.setState({ loading: false }));
  }

  handleGameStart() {
    this.setState({ gameStarted: true });
  }

  renderMain() {
    const { classes, authors } = this.props;
    const { open, loading, gameStarted } = this.state;

    if (!gameStarted) {
      return <GameStart onStart={this.handleGameStart} />;
    }

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
              <section id="blogs_section">
                <Blogs />
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
                <FavoriteIcon fontSize="small" style={{ color: '#e06890' }} />
                <p>by</p>
                <a href="mailto:pshin518@gmail.com">Patti Shin</a>
              </footer>
            </main>
          </>
        )}
      </div>
    );
  }

  render() {
    return (
      <Routes>
        {/* Blog post detail — standalone page, no game gate */}
        <Route path="/blog/:slug" element={<BlogPost />} />
        {/* Everything else — game gate + main site */}
        <Route path="*" element={this.renderMain()} />
      </Routes>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  authors: state.author.authors,
});

const mapDispatchToProps = dispatch => ({
  getAuthor: () => dispatch(getAuthor()),
});

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(App)
);
