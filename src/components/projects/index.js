import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import FolderIcon from '@mui/icons-material/Folder';
import './Projects.css';
import styles from './styles';

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
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectFolder('pattishin')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Personal Site"}</h4>
              <p>{"This current site in fact! Utilizes React.js, simple Golang server, Cloud Firestore, and deployed via Google Cloud App Engine."}</p>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectFolder('geronimo')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Geronimo API Explorer"}</h4>
              <p>{"Toy API Explorer app built in vanilla JavaScript and deployed in Google Cloud App Engine."}</p>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectFolder('movie-performance-ui')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Movie Search UI"}</h4>
              <p>{"Vanilla JavaScript movie list app to practice load performance."}</p>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectFolder('fireflygallery')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Firefly Gallery UI"}</h4>
              <p>{"Incredibly simple gallery list that uses React.js to practice image aspect ratio"}</p>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectFolder('tinker-drone')}>
            <div className="projectFolder">
              <FolderIcon style={{ color: 'rgb(100, 255, 218)' }} />
              <h4>{"Nodecopters"}</h4>
              <p>{"Uses NodeJS, Cylon.js, and Node AR Drone module to programmatically control a parrot drone from your local environment."}</p>
            </div>
          </Grid2>
        </Grid2>
      </Container>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
