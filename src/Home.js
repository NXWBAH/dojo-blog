import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState([
		{ title: 'My new Website!', body: 'lorem ipsum...', author: 'Mario', id: 1 },
		{ title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
		{ title: 'Web Dev Top Tips!', body: 'lorem ipsum...', author: 'Mario', id: 3 },
	]);

	// This function passes the entire blogs array into the new Blogs, but looks for the blog associated with the id passed into it.
	// That blog is then removed from the array --  and the new array, without that blog, is set as the updated blogs to be displayed.
	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	};

	//  Props are used here for two reasons
	// 1. It allows for the BlogList component to be more re-useable
	// 2. It allows for us to still use the data above in the home component
	// 		Props are used to pass data from a parent component to a child component.
	// 		Create a tag on the Component, and then access it wihtin the component's file.
	// 		Props here, are both 'blogs' and 'title'
	// .Filter allows you to cycle through the array and filter what you want to be returned.
	// blogs.filter((blog) => blog.author === 'mario') allows you only return Blogs associated with mario
	return (
		<div className='home'>
			<BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete} />
			<BlogList blogs={blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs!" />
		</div>
	);
};

export default Home;
