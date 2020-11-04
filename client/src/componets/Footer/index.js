import React from 'react';

function Footer() {
	return (
		<>
			<footer class="footer py-4">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-lg-4 text-lg-left">
							Created by Alvin Cox | Marcia Paige | Lisa Survana Copyright ©2020
							HIGHbrow
						</div>
						<div class="col-lg-4 my-3 my-lg-0">
							<a class="btn btn-success btn-social mx-2" href="#!">
								<i class="fab fa-twitter"></i>
							</a>
							<a class="btn btn-success btn-social mx-2" href="#!">
								<i class="fab fa-facebook-f"></i>
							</a>
							<a class="btn btn-success btn-social mx-2" href="#!">
								<i class="fab fa-linkedin-in"></i>
							</a>
						</div>
						<div class="col-lg-4 text-lg-right">
							<a class="mr-3" href="#!">
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
