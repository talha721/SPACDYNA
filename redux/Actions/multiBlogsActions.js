import * as ActionTypes from '../ActionTypes'
import {getMultiBlogsUrl} from "../../constants/urls";

export const getMultiBlogsSuccess = (data) => {
    return{
        type: ActionTypes.GET_MULTI_BLOGS_SUCCESS,
        payload: data
    }
}

export const fetchMultiBlogs = () => dispatch => {
    return fetch(getMultiBlogsUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => dispatch(getMultiBlogsSuccess(data)))
}