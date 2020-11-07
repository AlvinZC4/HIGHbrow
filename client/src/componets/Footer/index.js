import React from 'react';
import './styles.css';

function Footer() {
	return (
		<>
			<footer className="footer mt-auto py-4">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-4 text-lg-left">
							Created by Alvin Cox | Marcia Paige | Lisa Survana Copyright ©2020
							HIGHbrow
						</div>
						<div className="col-lg-4 my-3 my-lg-0">
							<a className="btn btn-success btn-social mx-2" href="#!">
								<i className="fab fa-twitter"></i>
							</a>
							<a className="btn btn-success btn-social mx-2" href="#!">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a className="btn btn-success btn-social mx-2" href="#!">
								<i className="fab fa-linkedin-in"></i>
							</a>
						</div>
						<div className="col-lg-4 text-lg-right">
							<a className="mr-3" href="#!">
								Privacy Policy
							</a>
							<a href="#!">Terms of Use</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
