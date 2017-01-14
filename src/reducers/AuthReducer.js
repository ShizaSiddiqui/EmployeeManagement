import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } 
from '../actions/types';

const INITIAL_STATE = { email: '', password: '', user: null, error: '' };

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED: //update the state here!!!!
            //we cannot do the below because of the tripple equal!!!
            //state.email = action.payload
            //return state

            //take the existing state and add an email property. 
            //this will override existing email. This creats a new object.
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_SUCCESS:
            return { ...state, error: '', user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '' };
        default:
            return state;
    }
};
