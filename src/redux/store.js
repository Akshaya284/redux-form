
import { createStore } from 'redux';

const initialState = {
  name: '',
  email: '',
  message: '',
  nameError: '',
  emailError: '',
  messageError:''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    case 'UPDATE_EMAIL':
      return { ...state, email: action.payload };
    case 'UPDATE_MESSAGE':
      return { ...state, message: action.payload };
    case 'RESET_FORM':
      return initialState;
    case 'VALIDATE_FORM':
      return {
        ...state,
        nameError: !state.name ? 'Name is required' : '',
        EmailError: !state.email ? 'Email is required' : !/\S+@\S+\.\S+/.test(state.email) ? 'Email is invalid' : '',
        messageError: !state.message ? 'Message is required' : ''
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;