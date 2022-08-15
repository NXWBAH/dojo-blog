import { Link } from 'react-router-dom';
const navbar = () => {
	return (
		<nav className='navbar'>
			<h1>The Dojo Blog</h1>
			<div className='links'>
				<Link to='/'>Home</Link>
				<Link
					to='/create'
					style={{ color: 'white', backgroundColor: '#f1356d', borderRadius: '8px' }}>
					New Blog
				</Link>
			</div>
		</nav>
	);
};

// Style {{}} = Outer means Dynamic Value, Inner means JS object
// Link is a Reactive version of an anchor tag. Allows for React router to prevent the request from the server. - Quicker

export default navbar;
