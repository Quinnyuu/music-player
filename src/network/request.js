import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://www.mxnzp.com/api',
        timeout: 30000
    })
    instance.interceptors.request.use(res => {
        return res;
        },
        err => {
            console.log(err);
        }
    )
    instance.interceptors.response.use(res => res.data,
        err => {
            console.log(err);
        }
    )
    return instance(config)
}