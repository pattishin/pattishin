import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import talk1 from '../../assets/talk1.svg';
import talk2 from '../../assets/talk2.png';
import talk3 from '../../assets/talk3.png';
import talk4 from '../../assets/talk4.svg';
import talk5 from '../../assets/talk5.svg';
import './Talks.css';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 'inherit',
  }
});

class Talks extends Component {
  render() {
    const { classes } = this.props;

    // TODO: Make timeline feature here it's own component and add to podcast section
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="talkHeader">
          <div className="talkTitle">
            <span role="img" aria-label="speaker">🔊</span>
            <span>{" Talks"}</span>
          </div>
        </h3>
        <div>
          <ul className="timelineList">
            <ol className="timelineItem year">
              <div className="timelineTitle">{"2019"}</div>
            </ol>
            <ol
              className="timelineItem" 
              onClick={() => window.open('https://drive.google.com/file/d/1h762DRabg7DKZzEzBY76B_8t02EudT4B/view?usp=sharing')}
            >
              <Grid container className="timelineContentWrapper">
                <Grid item xs={12} lg={3}>
                  <img src={talk5} alt="GDG SF DevFest 2019" />
                </Grid>
                <Grid item xs={12} lg={9} className="timelineContent">
                  <h4>{"Let's Cache! - Introduction to Service Workers"}</h4>
                  <p>{"Presented at GDG San Francisco DevFest Conference 2019."}</p>
                </Grid>
              </Grid>
            </ol>
            <ol className="timelineItem year">
              <div className="timelineTitle">{"2018"}</div>
            </ol>
            <ol
              className="timelineItem" 
              onClick={() => window.open('https://drive.google.com/file/d/1vE7RSqLI83zBjwJlrCB4C7RxpgA94s-x/view?usp=sharing')}
            >
              <Grid container className="timelineContentWrapper">
                <Grid item xs={12} lg={3}>
                  <img src={talk4} alt="Google I/O Extended (GDG Berkeley) 2018" />
                </Grid>
                <Grid item xs={12} lg={9} className="timelineContent">
                  <h4>{"Google I/O Extended Keynote 2018"}</h4>
                  <p>{"Presented at GDG Berkeley I/O Extended Meetup 2018."}</p>
                </Grid>
              </Grid>
            </ol>
            <ol className="timelineItem year">
              <div className="timelineTitle">{"2016"}</div>
            </ol>
            <ol
              className="timelineItem" 
              onClick={() => window.open('https://pattishin.github.io/')}
            >
              <Grid container className="timelineContentWrapper">
                <Grid item xs={12} lg={3}>
                  <img src={talk3} alt="Google I/O 2016 Re-cap" />
                </Grid>
                <Grid item xs={12} lg={9} className="timelineContent">
                  <h4>{"Google I/O Highlights 2016"}</h4>
                  <p>{"Presented at GDG Triangle (Durham, NC) to share major talks from Google I/O 2016."}</p>
                </Grid>
              </Grid>
            </ol>
            <ol className="timelineItem year">
              <div className="timelineTitle">{"2015"}</div>
            </ol>
            <ol
              className="timelineItem" 
              onClick={() => window.open('https://pattishin.github.io/techtalks')}
            >
              <Grid container className="timelineContentWrapper">
                <Grid item xs={12} lg={3}>
                  <img src={talk2} alt="Build with confidence 2015" />
                </Grid>
                <Grid item xs={12} lg={9} className="timelineContent">
                  <h4>{"Build with Confidence - Jive into front-end development"}</h4>
                  <p>{"Presented at DiamondHacks hackathon event at NC State University for students getting started in web development."}</p>
                </Grid>
              </Grid>
            </ol>
            <ol className="timelineItem year">
              <div className="timelineTitle">{"2014"}</div>
            </ol>
            <ol
              className="timelineItem" 
              onClick={() => window.open('https://drive.google.com/file/d/1MQuC407xpHwos3-yKTKIh3RZPb_P3b1a/view?usp=sharing')}
            >
              <Grid container className="timelineContentWrapper">
                <Grid item xs={12} lg={3}>
                  <img src={talk1} alt="JSConf 2014" />
                </Grid>
                <Grid item xs={12} lg={9} className="timelineContent">
                  <h4>{"JSConf 2014 Highlights"}</h4>
                  <p>{"Presented at WillowTree, Inc Lunch & Learn event to share learnings and personal demos from JSConf 2014 conference."}</p>
                </Grid>
              </Grid>
            </ol>
            <ol className="timelineItem year" />
          </ul>
        </div>
      </Container>
    );
  }
}

Talks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Talks);

