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
    return await axios.post('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/auth/login', formData);
}

export const registerUser = async (formData) => {
    return await axios.post('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/auth/register', formData);
}

export const getAllComments = async () => {
    setAuth();
    return await axios.get('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/comments', config);
}

export const postComment = async (formData) => {
    setAuth();
    return await axios.post('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/comments', formData, config)
}

export const getUserData = async (id) => {
    setAuth();
    return await axios.get(`https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/histories?user=${id}`, config);
}

export const postUserData = async (formData) => {
    setAuth();
    return await axios.post('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/histories', formData, config);
}

export const getBearish = async () => {
    setAuth();
    return await axios.get('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/stats/6372743e0d144d7f16b389f8', config);
}

export const patchBearish = async (data) => {
    setAuth();
    return await axios.patch('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/stats/6372743e0d144d7f16b389f8', data, config)
}

export const fetchTweets = async () => {
    setAuth();
    return await axios.post('https://8080-cabbfeeccebbedcbcbfcaadedddddcffeabc.examlyiopb.examly.io/twitter', {tweet: 'fuck'}, config);
}