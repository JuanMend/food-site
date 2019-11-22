import axios from 'axios';

const initialState = {
	pizzas: [],
	chickens: [],
	hamburgers: [],
	sushi: [],
	tacos: [],
	desserts: [],
	favorites: [],
	favoritesHamburger: []
};

const GET_PIZZA = 'GETPIZZA';
const GET_CHICKEN = 'GETCHICKEN';
const GET_HAMBURGER = 'GETHAMBURGER';
const GET_SUSHI = 'GETSUSHI';
const GET_TACOS = 'GETTACOS';
const GET_DESSERT = 'GETDESSERT';
const GET_FAVORITE = 'GETFAVORITE';
const ADD_FAVORITE = 'ADDFAVORITE';
const DELETE_FAVORITE = 'DELETE_FAVORITE';

export function deleteFavorite(id) {
	return {
		type: DELETE_FAVORITE,
		payload: axios.delete(`/api/favorites/${id}`)
	};
}

export function getFavorites() {
	return {
		type: GET_FAVORITE,
		payload: axios.get('/api/favorites')
	};
}

export function addFavorites(val) {
	return {
		type: ADD_FAVORITE,
		payload: axios.post('/api/favorites', val)
	};
}

export function getHamburgers() {
	return {
		type: GET_HAMBURGER,
		payload: axios.get('/api/gethamburger')
	};
}

export function getPizza() {
	return {
		type: GET_PIZZA,
		payload: axios.get('/api/getpizza')
	};
}

export function getChicken() {
	return {
		type: GET_CHICKEN,
		payload: axios.get('/api/getchicken')
	};
}

export function getSushi() {
	return {
		type: GET_SUSHI,
		payload: axios.get('/api/getsushi')
	};
}
export function getTacos() {
	return {
		type: GET_TACOS,
		payload: axios.get('/api/gettacos')
	};
}

export function getDessert() {
	return {
		type: GET_DESSERT,
		payload: axios.get('/api/getdessert')
	};
}

export default function food(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case `${GET_HAMBURGER}_FULFILLED`:
			return {
				...state,
				hamburgers: [ ...payload.data ]
			};
		case `${GET_PIZZA}_FULFILLED`:
			return {
				...state,
				pizzas: [ ...payload.data ]
			};
		case `${GET_CHICKEN}_FULFILLED`:
			return {
				...state,
				chickens: [ ...payload.data ]
			};
		case `${GET_SUSHI}_FULFILLED`:
			return {
				...state,
				sushi: [ ...payload.data ]
			};
		case `${GET_TACOS}_FULFILLED`:
			return {
				...state,
				tacos: [ ...payload.data ]
			};
		case `${GET_DESSERT}_FULFILLED`:
			return {
				...state,
				desserts: [ ...payload.data ]
			};
		case `${GET_FAVORITE}_FULFILLED`:
			return {
				...state,
				favorites: [ ...payload.data ]
			};

		case `${ADD_FAVORITE}_FULFILLED`:
			return {
				...state,
				favorites: [ ...payload.data ]
			};
		case `${DELETE_FAVORITE}_FULFILLED`:
			return {
				...state,
				favorites: payload.data
			};
		default:
			return state;
	}
}
