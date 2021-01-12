import { AUTHENTICATE, SIGNOUT, SET_PUSH_TOKEN } from '../actionTypes';

const innitialState = {
	token: null,
	userId: null,
	user: {},
	pushToken: null
}

const authReducer = (state = innitialState, action) => {
	switch(action.type) {
		case AUTHENTICATE: 
			return { ...state, token: action.token, userId: action.userId, user: action.user }
		case SIGNOUT:
			return { innitialState }
		case SET_PUSH_TOKEN:
			return { ...state, pushToken: action.pushToken }
		default:
			return state;
	}
}

export default authReducer;