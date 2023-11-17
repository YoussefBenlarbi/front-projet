// CustomHooks/Http.js
import axios from 'axios';

export default function Http() {
	const http = axios.create({
		baseURL: 'http://localhost:8080/api',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});

	return {
		// Corrected to return http object directly
		...http,
	};
}
