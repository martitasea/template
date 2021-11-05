import React from 'react';
import PropTypes from 'prop-types';
import {Box, Divider, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  text: {
    fontWeight: 'bold',
  },
});

function SectionTitle({title}) {
  const classes = useStyles();
  return (
    <Box mt={2} mb={1} >
      <Typography
        variant='subtitle1'
        className={classes.title}
      >
        {title}
      </Typography>
      <Divider/>
    </Box>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;