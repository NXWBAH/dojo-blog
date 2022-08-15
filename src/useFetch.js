import { useEffect, useState } from 'react';

// Custom Hook - NEEDS to start with use

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

// to run a JSON server file from within react - npx json-server --watch [FILE_LOCATION]  --port [DESIRED PORT]

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					if (!res.ok) {
						throw Error('Could not fetch the data for that resource.');
					}
					return res.json();
				})
				.then((resData) => {
					setData(resData);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					setError(err.message);
					setIsPending(false);
				});
		}, 1000);
	}, [url]);

	return { data, isPending, error };
};
export default useFetch;
