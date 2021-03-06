import Axios from "axios";

const AUTH_STARTED = "AUTH_STARTED";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAILED = "AUTH_FAILED";

const AUTH_DEAUTH = "AUTH_DEAUTH";

const initialState = {
	auth: {
		isFetching: false,
		authenticated: false,
		token: null,
		user: null,
	}
};

const delay = () => new Promise(resolve => setTimeout(() => resolve(), 1000));

/**
 * Authenticats a user with the app
 */
export function authenticate() {
	return async dispatch => {
		dispatch({
			type: AUTH_STARTED
		});
	}
}

/**
 * Log in a user
 * @param {*} data login form data
 */
export function login(data) {
	return async dispatch => {
		dispatch({
			type: AUTH_STARTED,
		});

		try {
			const res = await Axios.post('/auth/login', data);

			// Simulate a longer delay for the button animation
			await delay();
			
			dispatch({
				type: AUTH_SUCCESS,
				payload: res.data
			});
		} catch(error) {
			dispatch({
				type: AUTH_FAILED,
				payload: {error}
			});
		}
	}
}

/**
 * Log out a user
 */
export function logout() {
	return async dispatch => {
		dispatch({
			type: AUTH_STARTED
		});

		dispatch({
			type: AUTH_DEAUTH
		});
	}
}

export default function reducer(state = initialState, action = {}) {
	switch(action.type) {
		case AUTH_STARTED:
			return {
				...state,
				isFetching: true
			}
		case AUTH_FAILED:
			return {
				...state,
				isFetching: false,
				isAuthenticated: false,
				...action.payload
			}
		case AUTH_SUCCESS:
			return {
				...state,
				isFetching: false,
				isAuthenticated: true,
				...action.payload
			}
		case AUTH_DEAUTH:
			return initialState;

		default:
			return state;
	}
}