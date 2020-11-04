import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	useHistory,
} from 'react-router-dom';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import API from './utils/API';
import Signup from './pages/signup';
import Navbar from './componets/NavBar';
import Footer from './componets/Footer';
import SigninButton from './componets/SigninButton';
import FindReader from './pages/findReader';
import Home from "./pages/home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
	const history = useHistory();

	const [user, setUser] = useState('');
	const [loginForm, setLoginForm] = useState({
		username: '',
		password: '',
	});

	useEffect(() => {
		console.log('user state', user);
	}, [user]);

	function handleInputChange(e) {
		const { name, value } = e.target;
		setLoginForm({ ...loginForm, [name]: value });
	}

	function handleLoginSubmit(e) {
		e.preventDefault();
		if (loginForm.username && loginForm.password) {
			checkUserCreds();
		} else {
			console.log('enter username and password');
		}
	}

	function checkUserCreds() {
		API.getUsername(loginForm)
			.then((res) => {
				console.log('Running checkUserCreds');
				console.log(res);

				if (!res.data.username) {
					console.log('Username or Password does is incorrect');
				} else {
					console.log('Setting username in checkUserCreds');
					setUser(res.data.username);
					history.push('/wishlist');
				}
			})
			.catch((err) => console.log(err));
	}

	return (
		<>
			<Navbar />

			<Router>
				<div>
					<Switch>
						<Route exact path="/home">
							<Home/>
						</Route>
						<Route exact path="/">
							<Login
								loginForm={loginForm}
								onChange={handleInputChange}
								onClick={handleLoginSubmit}
							/>
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/signinbutton">
							<SigninButton />
						</Route>
						<Route exact path="/findReader">
							<FindReader />
						</Route>

						<Route exact path="/wishlist">
							<Wishlist user={user} />
						</Route>
					</Switch>
				</div>
			</Router>
			<Footer />
		</>
	);
}

export default App;
