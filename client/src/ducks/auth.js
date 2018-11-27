const AUTH_STARTED = "AUTH_STARTED";
const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_FAILED = "AUTH_FAILED";

const initialState = {};


export function authenticate() {
	return async dispatch => {
		dispatch({
			type: AUTH_STARTED
		});
	}
}

export default function reducer(state = initialState, action = {}) {
	switch(action.type) {
		case AUTH_STARTED:
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}