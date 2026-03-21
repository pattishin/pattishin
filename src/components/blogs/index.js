import { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import './Blogs.css';
import styles from './styles';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.selectBlog = this.selectBlog.bind(this);
  }

  selectBlog(slug) {
    window.open(`journey-to-cloud-city-blog.glitch.me${slug}`, '_blank');
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="lg" className={classes.container}>

        {/* ── Game scene banner ── */}
        <div className="gameStageBanner">
          <div className="gsb-top">
            <span className="gsb-badge">STAGE 01</span>
            <div className="gsb-line" />
            <span className="gsb-title">SCROLL OF CHRONICLES</span>
            <div className="gsb-line" />
            <div className="gsb-stars">★★★☆☆</div>
          </div>
          <p className="gsb-desc">📖 Collect scrolls of wisdom  ·  XP REWARD: 300</p>
        </div>

        <h3 className="blogHeader">
          <div className="blogTitle">
            <span role="img" aria-label="pen">🖋️</span>
            <span>{" Blog"}</span>
          </div>
        </h3>

        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, lg: 4 }} onClick={() => this.selectBlog('/')}>
            <div className="blogFolder">
              <div className="blogQuestTag">ACTIVE QUEST ▶</div>
              <h4>{"Journey to Cloud City"}</h4>
              <p>{"Google Cloud Platform story series of the adventures of Cloud Traveler and Cloud Train Conductor to Cloud City."}</p>
              <div className="blogXPReward">+ 300 XP</div>
            </div>
          </Grid2>
        </Grid2>
      </Container>
    );
  }
}

Blogs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blogs);
