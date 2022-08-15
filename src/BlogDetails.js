import { useParams } from 'react-router-dom';

//useParams allows for us to grab the parameters from the route
const BlogDetails = () => {
	const { id } = useParams();
	return (
		<div className='blog-details'>
			<h2>Blog Details - {id}</h2>
		</div>
	);
};

export default BlogDetails;
