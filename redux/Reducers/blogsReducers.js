import * as ActionsTypes from '../ActionTypes'

const BlogReducer = (state = [], action) => {
    switch (action.type) {
        case ActionsTypes.GET_BLOGS_SUCCESS:
            return action.payload

        default:
            return state
    }
}

export default BlogReducer