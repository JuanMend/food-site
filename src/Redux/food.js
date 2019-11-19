import axios from 'axios';

const initialState = {
	pizzas: [],
	chickens: [],
	hamburgers: [],
	sushi: [],
	tacos: [],
	desserts: []
};

const GETPIZZA = 'GETPIZZA';
const GETCHICKEN = 'GETCHICKEN';
const GETHAMBURGER = 'GETHAMBURGER';
const GETSUSHI = 'GETSUSHI';
const GETTACOS = 'GETTACOS';
const GETDESSERT = 'GETDESSERT';

export function getHamburgers() {
	return {
		type: GETHAMBURGER,
		payload: axios.get('/api/gethamburger')
	};
}

export function getPizza() {
	return {
		type: GETPIZZA,
		payload: axios.get('/api/getpizza')
	};
}

export function getChicken() {
	return {
		type: GETCHICKEN,
		payload: axios.get('/api/getchicken')
	};
}

export function getSushi() {
	return {
		type: GETSUSHI,
		payload: axios.get('/api/getsushi')
	};
}
export function getTacos() {
	return {
		type: GETTACOS,
		payload: axios.get('/api/gettacos')
	};
}

export function getDessert() {
	return {
		type: GETDESSERT,
		payload: axios.get('/api/getdessert')
	};
}

export default function food(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GETHAMBURGER}_FULFILLED`:
			return {
				...state,
				hamburgers: [ ...payload.data ]
			};
		case `${GETPIZZA}_FULFILLED`:
			return {
				...state,
				pizzas: [ ...payload.data ]
			};
		case `${GETCHICKEN}_FULFILLED`:
			return {
				...state,
				chickens: [ ...payload.data ]
			};
		case `${GETSUSHI}_FULFILLED`:
			return {
				...state,
				sushi: [ ...payload.data ]
			};
		case `${GETTACOS}_FULFILLED`:
			return {
				...state,
				tacos: [ ...payload.data ]
			};
		case `${GETDESSERT}_FULFILLED`:
			return {
				...state,
				desserts: [ ...payload.data ]
			};
		default:
			return state;
	}
}
