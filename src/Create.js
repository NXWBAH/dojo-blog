import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Controlled Inputs and Data Binding
// - Create the const for each piece of data that is within the form.
// - the onChange function will be used to set the input to the current state of the variable.
// - Down at the bottom, the const is output as a preview as the user inputs what they want.
// - handleSubmit will be used to handle the form when the button is clicked
// - preventDefault ensures that the data that is input via the user is persisted on the page after clicking the button.
const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');
	const [isPending, setIsPending] = useState(false);
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch('http://localhost:8000/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			console.log('New Blog Added');
			setIsPending(false);
			// - navigate.push("/") takes the user back to the home page
			history.push('/');
		});
	};
	return (
		<div className='create'>
			<h2>Add a New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title:</label>
				<input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Blog Body:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

				<label>Blog Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Mario'>Mario</option>
					<option value='Yoshi'>Yoshi</option>
				</select>

				{/* If isPending is not true, the button will remain clickable. If it's true, the buttone will be disabled. */}
				{/* THIS IS KEY TO POSSIBLY SOMETHING IN THE ADMIN CONSOLE FOR JOB PROJECT */}
				{!isPending && <button>Add Blog</button>}
				{isPending && <button disabled>Adding Blog...</button>}

				<p>{title}</p>
				<p>{body}</p>
				<p>{author}</p>
			</form>
		</div>
	);
};

export default Create;
