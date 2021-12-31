import * as ActionTypes from '../ActionTypes'

export const ContactReducer = (state = {
    isProcessing: false,
    error: null,
    success_message: ''
}, action) => {
    switch (action.type) {

        case ActionTypes.CONTACT_SUCCESS:
            return {...state, isProcessing: false, error: null, success_message: action.payload}

        case ActionTypes.CONTACT_PROCESSING:
            return {...state, isProcessing: true, error: null, success_message: ''}

        case ActionTypes.CONTACT_FAILED:
            return {...state, isProcessing: false, error: action.payload, success_message: ''}

        default:
            return state
    }
}