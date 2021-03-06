import React from 'react';
import { Grid, Box, Hidden } from '@material-ui/core';
import RegistrationCard from '../components/Cards/RegistrationCard';

export default function RegistrationPage() {
	const imgStyle = {
		height: '100vh',
		width: '100%',
	};

	const containerStyle = {
		height: '100vh',
		width: '100vw',
	};

	return (
		<Grid container>
			<Grid item container xs={false} md={6}>
				<Grid item>
					<Hidden smDown>
						<img
							src="/login_img.jpg"
							style={imgStyle}
							alt="login"
							justifyContent="center"
							alignItems="center"
						/>
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				item
				container
				xs={12}
				md={6}
				style={containerStyle}
				justifyContent="center"
				alignItems="center"
			>
				<Box
					display="flex"
					style={containerStyle}
					justifyContent="center"
					alignItems="center"
				>
					<RegistrationCard />
				</Box>
			</Grid>
		</Grid>
	);
}
