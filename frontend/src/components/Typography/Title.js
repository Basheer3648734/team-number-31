import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../../styles/jss/typography';

const useStyles = makeStyles(styles);

export default function Title({ children }) {
	const classes = useStyles();
	return (
		<>
			<Typography variant="h5" className={classes.title}>
				{children}
			</Typography>
		</>
	);
}
