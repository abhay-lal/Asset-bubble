import axios from "axios";
import state from "../../redux-toolkit"
let config;

const setAuth = () => {
    config = {
        headers: {
            'Authorization': 'Bearer ' + state.getState().logged.token,
        }
    }
}

export const login = async (formData) => {
    return await axios.post('http://localhost:5000/auth/login', formData);
}

export const registerUser = async (formData) => {
    return await axios.post('http://localhost:5000/auth/register', formData);
}

export const getAllComments = async () => {
    setAuth();
    return await axios.get('http://localhost:5000/comments', config);
}

export const postComment = async (formData) => {
    setAuth();
    return await axios.post('http://localhost:5000/comments', formData, config)
}