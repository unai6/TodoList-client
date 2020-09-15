import { LOGIN_SUCCESS, LOGIN_ERROR} from '../constants/index';

export default (state, action) => {
	switch(action.type) {
        case LOGIN_SUCCESS:
  
			localStorage.setItem('token', action.payload.data.token);
            localStorage.setItem('user', JSON.stringify(action.payload.data.user));
        
			return {
				...state,
				token: action.payload.token,
                user: action.payload.user,
				loading: false
            }		

		case LOGIN_ERROR:
			localStorage.removeItem('token');
			localStorage.removeItem('user');
            
				return {
					...state,
					token: null,
                    user: null,
					message: action.payload, 
                    loading: false
				}
		default:
			return state;
	}
} 

    


