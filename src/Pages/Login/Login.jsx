import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="h-full w-screen md:flex">
			<div className="hidden flex-none md:block md:w-1/3 lg:w-2/4 xl:w-1/3 md:h-screen lg:2/4">
				<img
					src="https://images.unsplash.com/photo-1545147986-a9d6f2ab03b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
					alt="plants"
					className="h-full object-cover"
				/>
			</div>
			<div className="p-5 h-screen md:flex-1 md:p-12">
				<div className="logo">
					Shots <span className="text-pink-500">Sparrow</span>
				</div>
				<div className="flex h-full justify-center items-center">
					<div className="w-full h-full py-12 xl:h-auto flex justify-between flex-col xl:flex-row">
						<p className="font-logo font-light text-xl w-full max-w-sm md:w-96">
							Connect with millions of designers!! Showcase your work and be a part of
							someone’s feed today. <br />
							<br /> Join Shots Today!
						</p>
						<form className="w-full md:w-96 text-sm text-center">
							<input
								className="w-full h-14 pl-6 rounded-sm shadow placeholder-gray-400 font-light mb-4"
								placeholder="Email"
							/>
							<input
								className="w-full h-14 pl-6 rounded-sm shadow placeholder-gray-400 font-light mb-7"
								placeholder="Password"
							/>
							<button className="bg-pink-500 text-white-100 w-full h-14 rounded-sm shadow mb-4">
								LOGIN
							</button>
							<p>
								New to Sparrow Shots?{' '}
								<Link to="/signup" className="text-pink-400">
									Signup now!
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
