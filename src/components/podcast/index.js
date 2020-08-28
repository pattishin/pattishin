import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
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
        <Grid container className={"podcastWrapper"}>
          <Grid item xs={8}>
            <iframe
              title="robotsfireflies"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
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
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Podcast);

