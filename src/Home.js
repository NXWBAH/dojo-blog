import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
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

	const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title='All Blogs!' />}
		</div>
	);
};

export default Home;
