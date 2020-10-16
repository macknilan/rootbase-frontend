import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProgressIndicators() {
  return (
    <Grid
      container
      alignItems='center'
      justify='center'
      spacing={0}
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};
