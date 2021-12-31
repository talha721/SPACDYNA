import * as ActionTypes from '../ActionTypes'
import {getBlogsUrl} from "../../constants/urls";

export const getBlogsSuccess = (message) => {
    return{
        type: ActionTypes.GET_BLOGS_SUCCESS,
        payload: message
    }
}

export const getBlogs = () => dispatch => {
    return fetch(getBlogsUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => dispatch(getBlogsSuccess(data)))
}