import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

//useParams allows for us to grab the parameters from the route
const BlogDetails = () => {
	const { id } = useParams();
	const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

	return (
		<div className='blog-details'>
			{isPending && <div> Loading... </div>}
			{error && <div> {error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written By: {blog.author}</p>
					<p>{blog.body}</p>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
