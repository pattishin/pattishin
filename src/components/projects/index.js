import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import PixelSprite from '../../utils/PixelSprite';
import { MONITOR, EXPLORER, CLAPPER, FIREFLY, DRONE } from './sprites';
import './Projects.css';
import styles from './styles';

const PROJECTS = [
  {
    slug: 'pattishin',
    name: 'Personal Site',
    desc: 'This current site! React.js, Golang server, Cloud Firestore, deployed via Google Cloud App Engine.',
    sprite: MONITOR,
  },
  {
    slug: 'geronimo',
    name: 'Geronimo API Explorer',
    desc: 'Toy API Explorer app built in vanilla JavaScript and deployed in Google Cloud App Engine.',
    sprite: EXPLORER,
  },
  {
    slug: 'movie-performance-ui',
    name: 'Movie Search UI',
    desc: 'Vanilla JavaScript movie list app to practice load performance.',
    sprite: CLAPPER,
  },
  {
    slug: 'fireflygallery',
    name: 'Firefly Gallery UI',
    desc: 'Incredibly simple gallery list using React.js to practice image aspect ratio.',
    sprite: FIREFLY,
  },
  {
    slug: 'tinker-drone',
    name: 'Nodecopters',
    desc: 'NodeJS + Cylon.js + Node AR Drone to programmatically control a parrot drone.',
    sprite: DRONE,
  },
];

class Projects extends Component {
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
          {PROJECTS.map(({ slug, name, desc, sprite }) => (
            <Grid2 key={slug} size={{ xs: 12, lg: 4 }}>
              <button
                className="projectFolder"
                onClick={() => this.selectFolder(slug)}
                aria-label={`View project: ${name}`}
              >
                <div className="projectSpriteWrapper">
                  <PixelSprite pixels={sprite} size={7} />
                </div>
                <div className="projectInfo">
                  <h4>{name}</h4>
                  <p>{desc}</p>
                </div>
              </button>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
