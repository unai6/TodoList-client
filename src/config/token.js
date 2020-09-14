import {axiosInstance} from '../api/api';

const tokenAuth = token => {
    if(token) {
        axiosInstance.defaults.headers.common['Authorization'] = token;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;