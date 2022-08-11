import { useState } from 'react';

const Home = () => {
	// let name  = "mario";
	// When using useState, you need to attach it to an array variable.
	// Name = the current variable of the state, setName = the function that will be used to set the new Name when the function is called.
	const [name, setName] = useState('Mario');
	const [age, setAge] = useState(25);
	const handleClick = () => {
		setName('Luigi');
		setAge(30);
	};

	// *** Anonymous Function ***
	// const handleClickAgain = (name) => {
	// 	console.log('Hello' + name);
	// };

	return (
		<div className='home'>
			<h2>HomePage</h2>

			<p>
				{name} is {age} years old
			</p>
			<button onClick={handleClick}>Click me!</button>

			{/* <button
				onClick={() => {
					handleClickAgain('mario');
				}}>
				Click me Again!
			</button> */}
		</div>
	);
};

// Note: We don't want to invoke the function handleClick.
// If we do handleClick(), the function would run at runtime as opposed to running when the button is clicked.
// anonymous button redirects to another function. This is used when you have variables that you want to pass in

export default Home;
