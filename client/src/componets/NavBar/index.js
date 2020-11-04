import React from 'react';

function Navbar() {
	return (
		<>
			<section id="title">
				<div className="container-fluid">
					<nav className="navbar bg-info navbar-expand-lg navbar-dark fixed-top">
						<a className="navbar-brand" href="home">
							HIGHbrow
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<a className="nav-link" href="home">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="signup">
										Create Registry
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="Wishlist">
										Create Wishlist
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="findReader">
										Find Readers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="SignInButton">
										Sign In
									</a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</section>
		</>
	);
}

export default Navbar;
