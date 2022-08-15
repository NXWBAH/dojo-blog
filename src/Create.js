import { useState } from 'react';

// Controlled Inputs and Data Binding
// - Create the const for each piece of data that is within the form.
// - the onChange function will be used to set the input to the current state of the variable.
// - Down at the bottom, the const is output as a preview as the user inputs what they want.
const Create = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const [author, setAuthor] = useState('Mario');
	return (
		<div className='create'>
			<h2>Add a New Blog</h2>
			<form>
				<label>Blog Title:</label>
				<input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Blog Body:</label>
				<textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>

				<label>Blog Author:</label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Mario'>Mario</option>
					<option value='Yoshi'>Yoshi</option>
				</select>

				<button>Add Blog</button>

				<p>{title}</p>
				<p>{body}</p>
				<p>{author}</p>
			</form>
		</div>
	);
};

export default Create;
