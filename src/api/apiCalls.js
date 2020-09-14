import {axiosInstance} from './api'

//userCalls

export const signup = (data) => {
    return axiosInstance.post('/signup', data);
};

export const login = (data) => {
    return axiosInstance.post('/login', data);
};

export const logout = () => {
    return axiosInstance.post('/logout', {});

};

export const getDashboard = (userId) => {
    return axiosInstance.get(`/dashboard/${userId}`);
};

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