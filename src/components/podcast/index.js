import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import './Podcast.css';
import styles from './styles';

class Podcast extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg" className={classes.container}>

        {/* ── Game scene banner ── */}
        <div className="gameStageBanner">
          <div className="gsb-top">
            <span className="gsb-badge">STAGE 03</span>
            <div className="gsb-line" />
            <span className="gsb-title">TRANSMISSION HUB</span>
            <div className="gsb-line" />
            <div className="gsb-stars">★★★★★</div>
          </div>
          <p className="gsb-desc">🎙 Tune in to the signal  ·  XP REWARD: 400</p>
        </div>

        <h3 className="podcastHeader">
          <div className="podcastTitle">
            <span role="img" aria-label="microphone">🎙️</span>
            <span>{" Uncut Podcasts"}</span>
          </div>
        </h3>

        <Grid2 container className="podcastWrapper">
          <Grid2 size={{ xs: 12, lg: 8 }}>
            <div className="podcastCard">
              <div className="podcastSignal">
                <span className="signalBar" />
                <span className="signalBar" />
                <span className="signalBar" />
                <span className="signalBar" />
                <span className="podcastOnAir">ON AIR</span>
              </div>
              <iframe
                title="robotsfireflies"
                width="100%"
                height="166"
                style={{ overflow: 'hidden', border: 'none', display: 'block' }}
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/840285403%3Fsecret_token%3Ds-ZzO5PgYPgVb&color=%2300ffe7&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
              <div className="podcastMeta">
                <a
                  href="https://soundcloud.com/robotsfireflies"
                  title="Robots &amp; Fireflies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcastLink"
                >
                  Robots &amp; Fireflies
                </a>
                {' · '}
                <a
                  href="https://soundcloud.com/robotsfireflies/robotsandfireflies-2-19-20-912-pm/s-ZzO5PgYPgVb"
                  title="Episode 1: Tech Communities"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="podcastLink"
                >
                  Episode 1: Tech Communities
                </a>
              </div>
            </div>
          </Grid2>
        </Grid2>
      </Container>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Podcast);
