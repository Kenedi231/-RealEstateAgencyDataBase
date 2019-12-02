import axios from 'axios';
import qs from 'qs';

const baseUrl = 'http://localhost:3000/';

const axiosAction = ({url, method, data = null}) => {
    return new Promise((resolve, reject) => {
        axios.request({
            method,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
            },
            data: qs.stringify(data),
            url: `${baseUrl}${url}`,
        }).then(res => resolve(res))
        .catch(err => reject(err));
    })
};

export default axiosAction;