const BlogList = ({ blogs, title }) => {
	// const BlogList = {props} =>
	// const blogs = props.blogs;
	// const title = props.title;

	// You can access the props either directly by destructuring them from within the BlogList
	// Or calling the {props} object and specfiying which ones you want to call

	return (
		<div className='blog-list'>
			<h2>{title}</h2>
			{blogs.map((blog) => (
				<div className='blog-preview' key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
				</div>
			))}
		</div>
	);
};

export default BlogList;
