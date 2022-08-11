import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
	const googleURL = 'http://www.google.com';

	return (
		<div className='App'>
			<Navbar />
			<div className='content'>
				<Home />
				<a href={googleURL}>Google Site</a>
			</div>
		</div>
	);
}

export default App;
