import './App.css';

function App() {
	const title = 'Welcome to the new Blog!';
	const likes = 50;
	// const person = { name: 'Yoshi', age: 30 };
	const googleURL = 'http://www.google.com';

	return (
		<div className='App'>
			<div className='content'>
				<h1>{title}</h1>
				<p>Liked {likes} times</p>
				<p>{10}</p>
				<p>{'Hello Ninjas'}</p>
				<p>{[1, 2, 3, 4, 5]}</p>
				<p>{Math.random() * 10}</p>

				<a href={googleURL}>Google Site</a>
			</div>
		</div>
	);
}

export default App;
