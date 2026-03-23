import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { withStyles } from '../../utils/withStyles';
import CssBaseline from '@mui/material/CssBaseline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Sidebar,
  Talks,
  About,
  Header,
  Blogs,
  Projects,
  GameStart,
  BlogPost,
} from '../../components';
import './App.css';
import styles from './styles';

function App({ classes }) {
  const [open, setOpen] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  function renderMain() {
    if (!gameStarted) {
      return <GameStart onStart={() => setGameStarted(true)} />;
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header open={open} classes={classes} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <section id="about_section">
            <About />
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
          <footer className="footer">
            <p>Developed with</p>
            <FavoriteIcon fontSize="small" style={{ color: '#c05848' }} />
            <p>by Patti Shin</p>
          </footer>
        </main>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="*" element={renderMain()} />
    </Routes>
  );
}

export default withStyles(styles)(App);
