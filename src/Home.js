const Home = () => {
	const handleClick = () => {
		console.log('Hello Ninjas');
	};

	const handleClickAgain = (name) => {
		console.log('Hello' + name);
	};

	return (
		<div className='home'>
			<h2>HomePage</h2>
			<button onClick={handleClick}>Click me!</button>

			<button
				onClick={() => {
					handleClickAgain('mario');
				}}>
				Click me Again!
			</button>
		</div>
	);
};

// Note: We don't want to invoke the function handleClick.
// If we do handleClick(), the function would run at runtime as opposed to running when the button is clicked.
// the second button is an anonymous button that redirects to another function. This is used when you have variables that you want to pass in

export default Home;
