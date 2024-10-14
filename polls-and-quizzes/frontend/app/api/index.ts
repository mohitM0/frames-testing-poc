import axios from 'axios';


const baseURL = 'https://4372-2409-40d2-4b-bb50-7c45-5ff0-1385-2ec8.ngrok-free.app/';


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


