import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Person from '../../Pics/customer-service-phone.png';
import Footer from '.././Footer/Footer';

import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	personHelpImg: {
		width: '100%',
		height: '55vh'
	},
	contactTime: {
		textAlign: 'center',
		marginTop: '13vh'
	},
	contact: {
		// border: 'solid red',
		fontSize: '15px',
		width: '50%',
		marginLeft: '20vw',
		marginTop: '13vh',
		height: '50vh'
	},
	customerCare: {
		fontSize: '18px'
	}
}));

export default function Contact() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<Navbar />
			<Grid>
				<div>
					<img src={Person} className={classes.personHelpImg} />
				</div>
				<div className={classes.contactTime}>
					<h1>CONTACT US ANYTIME</h1>
				</div>
				<div className={classes.contact}>
					<h1>CONTACT</h1>
					<div>
						<h1 className={classes.customerCare}>ONLINE CUSTOMER CARE</h1>
						<p>Email us at FoodSite@gmail.com</p>
						<p>call us at (903) 323-3232</p>
					</div>
				</div>

				<Footer />
			</Grid>
		</div>
	);
}
