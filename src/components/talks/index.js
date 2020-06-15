import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import talk1 from '../../assets/talk1.svg';
import talk2 from '../../assets/talk2.svg';
import talk3 from '../../assets/talk3.svg';
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
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
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
            <ol className="timelineItem">
              <div className="timelineContent">
                <h4>GDG SF DevFest 2019</h4>
                <img src={talk1} alt="GDG SF DevFest 2019" />
              </div>
            </ol>
            <ol className="timelineItem">
              <div className="timelineContent">
                <h4>Google I/O Extended (GDG Berkeley)</h4>
                <img src={talk2} alt="Google I/O Extended (GDG Berkeley)" />
              </div>
            </ol>
            <ol className="timelineItem">
              <div className="timelineContent">
                <h4>JS Conf 2014</h4>
                <img src={talk3} alt="JS Conf 2014" />
              </div>
            </ol>
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

