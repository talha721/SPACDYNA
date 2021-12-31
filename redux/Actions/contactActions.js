import * as ActionTypes from "../ActionTypes";
import {postContactUrl} from "../../constants/urls";
import { toast } from "react-toastify";


export const contactSuccess = (message) => {
    return{
        type: ActionTypes.CONTACT_SUCCESS,
        payload: message
    }
}

export const contactProcessing = () => {
    return{
        type: ActionTypes.CONTACT_PROCESSING
    }
}

export const contactFailed = (err) => {
    return{
        type: ActionTypes.CONTACT_FAILED,
        payload: err
    }
}

export const postContact = (values) => (dispatch) => {

    dispatch(contactProcessing())

    const newContact = {
        name: values.name,
        surname: values.surname,
        email: values.email,
        message: values.message
    }

    return fetch(postContactUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newContact)
    })
        .then(response => response.json())
        .then(data => {
            dispatch(contactSuccess(data))
            document.getElementById('contact-form').reset();
            toast.success("Thankyou! We'll contact you soon.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
        .catch(err => {
            dispatch(contactFailed(err))
            toast.error("Contact Failed.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })

}