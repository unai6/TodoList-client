import {axiosInstance} from './api'

//userCalls

export const signup = (data) => {
    return axiosInstance.post('/signup', data);
};

export const login = (data) => {
    return axiosInstance.post('/login', data);
};

export const getDashboard = (userId, token) => {
    return axiosInstance.get(`/dashboard/${userId}`, { headers: { Authorization: token }});
};

export const getUserData = (userId) => {
    return axiosInstance.get(`/userinfo/${userId}`)
}

export const getUserTasks = (userId) => {
    return axiosInstance.get(`/${userId}/alltasks`)
}

//TaskCalls

export const createTask = (id, data) => {
    return axiosInstance.post(`/create-task/${id}`, data);
};

export const deleteTask = (userId, taskId, data) => {
    return axiosInstance.post(`/delete-task/${userId}/${taskId}`, data);
};

export const editTask = (userId, taskId, data) => {
    return axiosInstance.post(`/edit-task/${userId}/${taskId}`, data)
}