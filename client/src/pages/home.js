import React from 'react';

function Home() {
	return (
		<>
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3">
						<h1> Welcome to HIGHbrow!</h1>
						<h3 className="subtitle">A Gift Registry for Book Lovers</h3>
						<a
							className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
							href="#about"
						>
							Tell Me More
						</a>
					</div>

					<div className="col-lg-8 w-100%">
						<img className="lady" src="/images/images/curledup.jpg" alt="lady curled up with book"/>
					</div>

				
				
					<div className="container">
						<div className="text-center">
							<h3 className="section-heading text-uppercase">
								What is HIGHbrow?
							</h3>
							<h3 className="section-subheading text-muted">
								Avid Readers Gift Ideas
							</h3>
							<h3 className="section-subheading text-muted">Just Got Easy!</h3>
						</div>
						<div className="row text-center">
							<div className="col-md-4">
								<span className="fa-stack fa-2x">
									<i className="fa fa-circle fa-stack-2x text-primary"></i>
									<i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
								</span>
								<h3 className="my-3">E-Commerce</h3>
								<p className="text-muted">
									Various sites to choose from to gift a loved one,
									className=ate or friends with just a click of a button.
								</p>
							</div>

							<div className="col-md-4">
								<span className="fa-stack fa-2x">
									<i className="fas fa-circle fa-stack-2x text-primary"></i>
									<i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
								</span>
								<h3 className="my-3">Electronic Delivery</h3>
								<p className="text-muted">
									Are your recipients tech savvy, minimalist or
									environmentalist? No problem! Your reader can select their
									book preference where electronic options are available.
								</p>
							</div>
							<div className="col-md-4">
								<span className="fa-stack fa-2x">
									<i className="fa fa-circle fa-stack-2x text-primary"></i>
									<i className=" fas fa-virus-slash fa-stack-1x fa-inverse"></i>
								</span>
								<h3 className="my-3">COVID free</h3>
								<p className="text-muted">
									No trips to the bookstore!This keeps your chances and your
									loved ones chances of contracting the virus low.
								</p>
							</div>
						</div>

					
							<div className="container" id="about">
								<div className="text-center">
									<h3 className="section-heading text-uppercase">How it Works</h3>
									<h3 className="section-subheading text-muted">3 Easy Steps</h3>
								</div>
								<div className="row text-center">
									<div className="col-ml 5I ">
										<span className="fa-stack fa-2x">
											<i className="fa fa-circle fa-stack-2x text-primary"></i>
											<i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
										</span>

									
									<h3 className="my-3">Step 1 </h3>
									<p className="text-muted">
										Create a wishlist for friends to see and shop.
									</p>
								</div>

								<div className="col-md-4">
									<span className="fa-stack fa-2x">
										<i className="fas fa-circle fa-stack-2x text-primary"></i>
										<i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
									</span>
									<h3 className="my-3">Step 2</h3>
									<p className="text-muted">
										Share your link for your birthday, anniversary, college or
										for a book club.Share your list anytime of the year!
									</p>
								</div>
								<div className="col-md-4">
									<span className="fa-stack fa-2x">
										<i className="fa fa-circle fa-stack-2x text-primary"></i>
										<i className=" fas fa-virus-slash fa-stack-1x fa-inverse"></i>
									</span>
									<h3 className="my-3">Step 3 </h3>
									<p className="text-muted">
										Just listen out for the doorbell or your email notification
										that your gift has arrived.
									</p>
								</div>
							</div>

							<div className="container-fluid" id="testimonials">
								<h3 className="testimonial-text">
									"This was the best invention to read, gift and share books."
								</h3>
								<img
									className="t-image w-50%"
									src="/images/images/bookclub.jpg"
									alt="lady-profile"
								/>
								<em>The HIGHbrows of Chicago </em>
							</div>

							<div className="container" id="press">
								<img
									className="press-logo"
									src="/images/images/techCrunch.png"
									alt="tc-logo"
								/>
								<img
									className="press-logo"
									src="images/images/barnesnoble1.png"
									alt="barnes-and-noble-logo"
								/>
								<img
									className="press-logo"
									src="images/images/bizinsider.png"
									alt="biz-insider-logo"
								/>
								<img
									className="press-logo"
									src="images/images/amazon.png"
									alt="amazon-kindle-logo"
								/>
							</div>


						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
