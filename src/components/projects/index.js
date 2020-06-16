import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import './Projects.css';

const styles = (theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    padding: theme.spacing(2),
  }
});

class Projects extends Component {
  constructor(props) {
    super(props);
    this.selectFolder = this.selectFolder.bind(this);
  }

  selectFolder(slug) {
    window.open(`https://github.com/pattishin/${slug}`, '_blank');
  }

  render() {
    const { classes } = this.props;
    
    return (
      <Container maxWidth="lg" className={classes.container}>
        <h3 className="projectHeader">
          <div className="projectTitle">
            <span role="img" aria-label="gear">⚙️</span>
            <span>{" Code"}</span>
          </div>
        </h3>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} onClick={() => this.selectFolder('pattishin')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Personal Site"}</h4>
              <p>{"This current site in fact! Utilizes React.js, simple Golang server, Cloud Firestore, and deployed via Google Cloud App Engine."}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} onClick={() => this.selectFolder('movie-performance-ui')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Movie Search UI"}</h4>
              <p>{"Vanilla JavaScript movie list app to practice load performance."}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} onClick={() => this.selectFolder('fireflygallery')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Firefly Gallery UI"}</h4>
              <p>{"Incredibly simple gallery list that uses React.js to practice image aspect ratio"}</p>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} onClick={() => this.selectFolder('tinker-drone')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Nodecopters"}</h4>
              <p>{"Uses NodeJS, Cylon.js, and Node AR Drone module to programmatically control a parrot drone from your local environment."}</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);

