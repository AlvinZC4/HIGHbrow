import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
	return (
		<>
			<section id="title">
				<div className="container-fluid">
					<nav className="navbar bg-info navbar-expand-lg navbar-dark fixed-top">
						<span className="navbar-brand mb-0 h1">HIGHbrow</span>
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
									<Link className="nav-link" to="/">Home</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/newuser">Create Registry</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/wishlist">Create Wishlist</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/findreader">Find Readers</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/login">Sign In</Link>
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
