import axios from 'axios';

const initialState = {
	username: '',
	password: '',
	user: ''
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SIGNUP = 'SIGNUP';
const GET_USER = 'GET_USER';
const HANDLE = 'HANDLE';

export function handle(name, value) {
	return {
		type: HANDLE,
		payload: { name, value }
	};
}

export function getUser() {
	let user = axios.get('/auth/getuser');
	return {
		type: GET_USER,
		payload: user
	};
}

export function login(username, password) {
	let data = axios.get('/auth/login', { username, password });
	return {
		type: LOGIN,
		payload: data
	};
}

export function signup(username, password) {
	let data = axios.post('/auth/signup', { username, password });
	return {
		type: SIGNUP,
		payload: data
	};
}

export function logOut() {
	let data = axios.get('/auth/logout');
	return {
		type: LOGOUT,
		payload: data
	};
}

export default function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${LOGIN}_FULFILLED`:
			return {
				...state,
				username: payload.data.username,
				password: payload.data.password
			};
		case `${GET_USER}_FULFILLED`:
			return {
				...state,
				username: payload.data.username
			};
		case `${SIGNUP}_FULLFILLED`:
			return {
				...state,
				username: payload.data.username,
				password: payload.data.password
			};
		case `${LOGOUT}_FULFILLED`:
			return {
				...state,
				username: '',
				password: ''
			};
		case HANDLE:
			return {
				...state,
				[payload.name]: payload.value
			};
		default:
			return state;
	}
}
