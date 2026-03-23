import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
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

function App({ classes }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const authors = useSelector(state => state.author.authors);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(getAuthor()).then(() => setLoading(false));
  }, [dispatch]);

  function renderMain() {
    if (!gameStarted) {
      return <GameStart onStart={() => setGameStarted(true)} />;
    }

    return (
      <div className={classes.root}>
        {loading ? <Loading /> : (
          <>
            <CssBaseline />
            <Header open={open} classes={classes} setOpen={setOpen} />
            <Sidebar open={open} setOpen={setOpen} />
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
                <FavoriteIcon fontSize="small" style={{ color: '#c05848' }} />
                <p>by</p>
                <a href="mailto:pshin518@gmail.com">Patti Shin</a>
              </footer>
            </main>
          </>
        )}
      </div>
    );
  }

  return (
    <Routes>
      {/* Blog post detail — standalone page, no game gate */}
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Everything else — game gate + main site */}
      <Route path="*" element={renderMain()} />
    </Routes>
  );
}

export default withStyles(styles)(App);
