import axios from 'axios';
import qs from 'qs';

const baseUrl = 'http://localhost:3000';

const axiosAction = ({url, method, data = {}}) => {
    const token = localStorage.getItem('token');
    return new Promise((resolve, reject) => {
        axios.request({
            method,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(data),
            url: `${baseUrl}${url}`,
        }).then(res => resolve(res))
        .catch(err => reject(err));
    })
};

export default axiosAction;