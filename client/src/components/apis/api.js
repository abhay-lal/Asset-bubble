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
    return await axios.post('http://localhost:8080/auth/login', formData);
}

export const registerUser = async (formData) => {
    return await axios.post('http://localhost:8080/auth/register', formData);
}

export const getAllComments = async () => {
    setAuth();
    return await axios.get('http://localhost:8080/comments', config);
}

export const postComment = async (formData) => {
    setAuth();
    return await axios.post('http://localhost:8080/comments', formData, config)
}

export const getUserData = async (id) => {
    setAuth();
    return await axios.get(`http://localhost:8080/histories?user=${id}`, config);
}

export const postUserData = async (formData) => {
    setAuth();
    return await axios.post('http://localhost:8080/histories', formData, config);
}

export const getBearish = async () => {
    setAuth();
    return await axios.get('http://localhost:8080/stats/6372743e0d144d7f16b389f8', config);
}

export const patchBearish = async (data) => {
    setAuth();
    return await axios.patch('http://localhost:8080/stats/6372743e0d144d7f16b389f8', data, config)
}

export const fetchTweets = async () => {
    setAuth();
    return await axios.post('http://localhost:8080/twitter', {tweet: 'fuck'}, config);
}