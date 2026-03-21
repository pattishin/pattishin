import { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '../../utils/withStyles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../../assets/pattishin.jpg';
import './Sidebar.css';
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, open, setOpen } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={() => setOpen(false) } aria-label="Close sidebar">
            <ChevronLeftIcon style={{ color: 'rgb(100, 255, 218)' }} />
          </IconButton>
        </div>
        <div className="authorCard">
          <div className="authorCardTop">
            <div className="authorAvatarWrapper">
              <img src={avatar} className="avatar" alt="Patti Shin's avatar" />
            </div>
          </div>
          <div className="authorCardBody">
            <div className="authorSocialMedia">
              <a href="https://github.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton" aria-label="GitHub">
                  <GitHubIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://twitter.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton" aria-label="Twitter">
                  <TwitterIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton className="menuButton" aria-label="LinkedIn">
                  <LinkedInIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    );
  }
}

Sidebar.defaultProps = {
  open: true,
  setOpen: () => {}
}

Sidebar.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
