import { SET_FORM_DATA, RESET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: ''
    },
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA :
        return {
            ...state,
            formData: {
                ...state.formData,
                ...action.payload,
            }
        }
        case RESET_FORM_DATA:
        return {
                ...state,
                formData: initialState.formData,
        }
        default:
            return state;
    }
};

export default formReducer;