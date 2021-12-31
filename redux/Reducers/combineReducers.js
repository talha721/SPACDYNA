import { combineReducers } from "redux";
import {ContactReducer} from "./contactReducers";
import BlogReducer from "./blogsReducers";
import MultiBlogReducer from "./multiBlogsReducers";

export default combineReducers ({
    contactUs: ContactReducer,
    blogs: BlogReducer,
    multiBlogs: MultiBlogReducer
})