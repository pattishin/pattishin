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
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} onClick={() => this.selectFolder('movie-performance-ui')}>
              <div className="projectFolder">
                <h4>Movie List</h4>
                <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </div>
            </Grid>
            <Grid item xs={12} lg={4} onClick={() => this.selectFolder('fireflygallery')}>
              <div className="projectFolder">
                <h4>Firefly Gallery</h4>
                <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </div>
            </Grid>
            <Grid item xs={12} lg={4} onClick={() => this.selectFolder('tinker-pebble-drone-remote')}>
              <div className="projectFolder">
                <h4>Pebble Drone Remote</h4>
                <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </div>
            </Grid>
            <Grid item xs={12} lg={4} onClick={() => this.selectFolder('tinker-drone')}>
              <div className="projectFolder">
                <h4>Nodecopters</h4>
                <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              </div>
            </Grid>
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

