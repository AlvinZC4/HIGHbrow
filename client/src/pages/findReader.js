import React from 'react';

function FindReader() {
	return (
		<>
			<div className="container">
				<div className="panel-heading">
					<div className="panel-title text-center">
						<h1 className="">Create Your Account</h1>
						<hr />
					</div>
				</div>

				<div className="main-login main-center">
					<form className="positon-relative" method="post" action="#">
						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">
								First Name:
							</label>
							<div className="cols-sm-5">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-user-plus fa" aria-hidden="true"></i>
									</span>
									<input
										type="text"
										className="form-control formcontrolcls"
										name="name"
										id="name"
										placeholder="Enter your Name here"
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="name" className="cols-sm-2 control-label">
								{' '}
								Last Name:
							</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-user-plus fa" aria-hidden="true"></i>
									</span>
									<input
										type="text"
										className="form-control formcontrolcls"
										name="name"
										id="name"
										placeholder="Enter your Name here"
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="email" className="cols-sm-2 control-label">
								Email:
							</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-envelope" aria-hidden="true"></i>
									</span>
									<input
										type="text"
										className="form-control formcontrolcls"
										name="email"
										id="email"
										placeholder="Enter your Email here"
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<button
								type="button"
								className="btn btn-info btn-lg btn-block login-button"
							>
								Click to Find!
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default FindReader;
