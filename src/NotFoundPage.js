import { Link } from 'react-router-dom';
const NotFoundPage = () => {
	return (
		<div className='not-Found'>
			<h2>Sorry</h2>
			<p>That page cannot not be found</p>
			<Link to='/'>Click here to go back to the home page...</Link>
		</div>
	);
};

export default NotFoundPage;
