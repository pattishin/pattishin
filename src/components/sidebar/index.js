import React, { Component } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import avatar from '../../assets/patti.jpeg';
import './Sidebar.css';

const drawerWidth = 240;
const styles = (theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    backgroundColor: 'rgb(10, 25, 47)',
    ...theme.mixins.toolbar,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: 'rgb(10, 25, 47)',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: '0px',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  }
});

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
          <IconButton onClick={() => setOpen(false) }>
            <ChevronLeftIcon style={{ color: 'rgb(100, 255, 218)' }} />
          </IconButton>
        </div>
        <div className="authorCard">
          <div className="authorCardTop">
            <div className="authorAvatarWrapper">
              <img src={avatar} className="avatar" alt="avatar" />
            </div>
          </div>
          <div className="authorCardBody">
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              patti shin
            </Typography>
            <div className="authorSocialMedia">
              <a href="https://github.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <GitHubIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://twitter.com/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <TwitterIcon style={{ color: 'rgb(100, 255, 218)' }} />
                </IconButton>
              </a>
              <a href="https://www.linkedin.com/in/pattishin" target="_blank" rel="noopener noreferrer">
                <IconButton>
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


