import { useTheme } from '@mui/material/styles';
import { ClassNames } from '@emotion/react';

/**
 * Custom withStyles HOC that uses MUI v6's Emotion theme context.
 * Drop-in replacement for the removed @mui/material/styles withStyles.
 */
export function withStyles(stylesCreator) {
  return function(WrappedComponent) {
    function WithStyles(props) {
      const theme = useTheme();
      const styles = typeof stylesCreator === 'function'
        ? stylesCreator(theme)
        : stylesCreator;

      return (
        <ClassNames>
          {({ css }) => {
            const classes = Object.keys(styles).reduce((acc, key) => {
              acc[key] = css(styles[key]);
              return acc;
            }, {});
            return <WrappedComponent {...props} classes={classes} />;
          }}
        </ClassNames>
      );
    }

    WithStyles.displayName = `WithStyles(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
    return WithStyles;
  };
}
