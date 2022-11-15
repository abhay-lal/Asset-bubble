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
<<<<<<< HEAD
=======
}

export const getUserData = async (id) => {
    setAuth();
    return await axios.get(`http://localhost:5000/histories?user=${id}`, config);
}

export const postUserData = async (formData) => {
    setAuth();
    return await axios.post('http://localhost:5000/histories', formData, config);
}

export const getBearish = async () => {
    setAuth();
    return await axios.get('http://localhost:5000/stats/6372743e0d144d7f16b389f8', config);
}

export const patchBearish = async (data) => {
    setAuth();
    return await axios.patch('http://localhost:5000/stats/6372743e0d144d7f16b389f8', data, config)
}

export const fetchTweets = async () => {
    setAuth();
    return await axios.post('http://localhost:5000/twitter', {tweet: 'fuck'}, config);
>>>>>>> f16c2143db4a93fa3798e5e7ba817f2e2ca8982b
}