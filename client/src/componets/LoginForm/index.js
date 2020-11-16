import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm(props) {

	return (
		<div className="main-login main-center  ">
			<form className="login ">
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						value={props.loginForm.username}
						onChange={props.onChange}
						className="form-control"
						placeholder="Enter Username"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={props.loginForm.password}
						onChange={props.onChange}
						className="form-control"
						placeholder="Enter Password"
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button onClick={props.onClick} className="btn btn-primary">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default LoginForm;
