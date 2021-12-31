import * as ActionTypes from '../ActionTypes'

const MultiBlogReducer = ((state = {}, action) => {
    switch (action.type) {

        case ActionTypes.GET_MULTI_BLOGS_SUCCESS:
            return action.payload

        default:
            return state

    }
})

export default MultiBlogReducer