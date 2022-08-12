import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);

	// This function passes the entire blogs array into the new Blogs, but looks for the blog associated with the id passed into it.
	// That blog is then removed from the array --  and the new array, without that blog, is set as the updated blogs to be displayed.

	// useEffect is used for Authentication Services - Gets ran every render of the data
	// DO NOT CHANGE THE STATE FROM WITHIN useEffect. It will result in a never ending loop.
	// Passing in an empty array as a dependancy allows for useEffect to only be ran during the initial launch of the application.
	// If there is a dependancy listed, it will watch that dependancy and will only run when that dependancy is altered.

	// fetch grabs the resource that is being watched. It is a GET method, and is a promise so we need a .then method at the end of it.
	// Can not make it async.
	// When you return a result (res), it is a promise and asyncronous -- requires a .then method.
	// Data is the Json data in  db.json.

	// It is important to note that we can only setBlogs here because we are passing in an empty dependancy. Meaning this useEffect only gets ran during
	// the initial launch.

	// When the Data is finished Loading, the Loading message that is getting displayed will be turned off and the data will be displayed in it's place.
	// setTimeout implements a timer that tells the function to wait for x amount of seconds before running the method within it.
	// The second parameter details how long to wait until the function is ran - 1000 miliseconds == 1 second.
	// Realistically, we don't need this because the Loading message will be displayed until the server call is completed.

	useEffect(() => {
		setTimeout(() => {
			fetch('http://localhost:8000/blogs')
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log(data);
					setBlogs(data);
					setIsPending(false);
				});
		}, 1000);
	}, []);

	//  Props are used here for two reasons
	// 1. It allows for the BlogList component to be more re-useable
	// 2. It allows for us to still use the data above in the home component
	// 		Props are used to pass data from a parent component to a child component.
	// 		Create a tag on the Component, and then access it wihtin the component's file.
	// 		Props here, are both 'blogs' and 'title'
	// .Filter allows you to cycle through the array and filter what you want to be returned.
	// blogs.filter((blog) => blog.author === 'mario') allows you only return Blogs associated with mario
	// Logical AND -- && -- It evaluates the left first. If the left is false, it doesn't even bother with the right side.
	// This is needed because when the program is initially ran, the blogs variable is set to Null and Null throws an error
	// Due to blogs being cycled through a map in the BlogList.js

	// isPending undergoes the same conditional Logical AND - && - method. A Loading message will be displayed while the data is fetched.
	return (
		<div className='home'>
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title='All Blogs!' />}
		</div>
	);
};

export default Home;
