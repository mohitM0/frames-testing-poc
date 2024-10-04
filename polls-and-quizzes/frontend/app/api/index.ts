import axios from 'axios';


const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://polls-app-2021.herokuapp.com';


const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getPolls = async () => {
    try {
        const response = await axiosInstance.get('/polls');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getPoll = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/polls/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const createPoll = async (poll: any) => {
    try {
        const response = await axiosInstance.post('/polls', poll);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const updatePoll = async (id: any, index: any) => {
    try {
        const response = await axiosInstance.post(`/polls/${id}/vote/${index}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


