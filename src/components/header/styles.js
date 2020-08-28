const drawerWidth = 300;

const styles = (theme) => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toolbarItem: {
    display: "inline-flex",
    justifyContent: "flex-end",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'black',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth-1}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
});

export default styles;

