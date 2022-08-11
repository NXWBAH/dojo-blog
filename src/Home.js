import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new Website!', body: 'lorem ipsum...', author: 'Mario', id: 1 },
		{ title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
		{ title: 'Web Dev Top Tips!', body: 'lorem ipsum...', author: 'Mario', id: 3 },
	]);

	//  Props are used here for two reasons
	// 1. It allows for the BlogList component to be more re-useable
	// 2. It allows for us to still use the data above in the home component
	// Props are used to pass data from a parent component to a child component.
	// Create a tag on the Component, and then access it wihtin the component's file.
	// Props here, are both 'blogs' and 'title'
	return (
		<div className='home'>
			<BlogList blogs={blogs} title='All Blogs!' />
		</div>
	);
};

export default Home;
