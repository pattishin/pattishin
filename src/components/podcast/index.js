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

    // TODO: Create component out of soundcloud iframe
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="podcastHeader">
          <div className="podcastTitle">
            <span role="img" aria-label="microphone">🎙️</span>
            <span>{" Uncut Podcasts"}</span>
          </div>
        </h3>
        <Grid2 container className={"podcastWrapper"}>
          <Grid2 size={8}>
            <iframe
              title="robotsfireflies"
              width="100%"
              height="166"
              style={{ overflow: 'hidden', border: 'none' }}
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/840285403%3Fsecret_token%3Ds-ZzO5PgYPgVb&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            >
            </iframe>
            <div style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: 100
              }}>
              <a
                href="https://soundcloud.com/robotsfireflies"
                title="Robots &amp; Fireflies"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#cccccc",
                  textDecoration: "none"
                }}
              >
                Robots &amp; Fireflies
              </a> ·
              <a
                href="https://soundcloud.com/robotsfireflies/robotsandfireflies-2-19-20-912-pm/s-ZzO5PgYPgVb"
                title="Episode 1: Tech Communities"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#cccccc",
                  textDecoration: "none"
                }}
              >
                Episode 1: Tech Communities
              </a>
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
