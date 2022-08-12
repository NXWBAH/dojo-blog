import { useState, useEffect } from 'react';
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

	const [name, setName] = useState('Mario');

	// Used for Authentication Services - Gets ran every render of the data
	// DO NOT CHANGE THE STATE FROM WITHIN useEffect. It will result in a never ending loop.
	// Passing in an empty array as a dependancy allows for useEffect to only be ran during the initial launch of the application.
	// If there is a dependancy listed, it will watch that dependancy and will only run when that dependancy is altered.

	useEffect(() => {
		console.log('Use effect ran.');
		console.log(name);
	}, [name]);

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
			<button onClick={() => setName('Luigi')}>Change Name</button>
			<p>{name}</p>
		</div>
	);
};

export default Home;
