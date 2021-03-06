import React from 'react';

function SigninButton() {
	return (
		<>
			<div className="container">
				<div className="panel-heading">
					<div className="panel-title text-center">
						<h1 className="">Welcome Back HIGHbrower!</h1>
						<hr />
					</div>
				</div>

				<div className="main-login main-center">
					<form className="form-horizontal" method="post" action="#">
						<div className="form-group">
							<label for="username" className="cols-sm-2 control-label">
								Username:
							</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-user-secret fa" aria-hidden="true"></i>
									</span>
									<input
										type="text"
										className="form-control formcontrolcls"
										name="username"
										id="username"
										placeholder="Desired Username"
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
							<label for="password" className="cols-sm-2 control-label">
								Password:
							</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-lock fa-lock" aria-hidden="true"></i>
									</span>
									<input
										type="password"
										className="form-control formcontrolcls"
										name="password"
										id="password"
										placeholder="Password: Must be 8 char long"
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label for="confirm" className="cols-sm-2 control-label">
								Re-enter Password:
							</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon iconbk">
										<i className="fa fa-lock fa-lock" aria-hidden="true"></i>
									</span>
									<input
										type="password"
										className="form-control formcontrolcls"
										name="confirm"
										id="confirm"
										placeholder="Confirm Password"
									/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<button
								type="button"
								className="btn btn-info btn-lg btn-block login-button"
							>
								Sign In!
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default SigninButton;
