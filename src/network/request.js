import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'https://www.mxnzp.com/api',
        timeout: 30000
    })
    instance.interceptors.request.use(res => {
        // let defaultParams = {
        //     app_id: 'trko8ptipmkjblks',
        //     app_secret: 'Q2N3UUFiaysyVmwxYko0bHNvYkR0dz09'
        // }
        // res.data = Object.assign(defaultParams, res.data);
        // console.log(res);
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