import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
	// const BlogList = {props} =>
	// const blogs = props.blogs;
	// const title = props.title;

	// You can access the props either directly by destructuring them from within the BlogList
	// Or calling the {props} object and specfiying which ones you want to call

	// <Link to={`/blogs/${blog.id}`}> is a dynamic mapping to the blog associated to the ID of the Blogs. ID is located in the db.json file

	return (
		<div className='blog-list'>
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<Link to={`/blogs/${blog.id}`}>
						<h2>{blog.title}</h2>
						<p>Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default BlogList;
