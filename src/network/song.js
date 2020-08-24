import { request } from './request'

export function getMusicList() {
    return request({
        url: '/music/order/song/list?type=1&page=1&app_id=trko8ptipmkjblks&app_secret=Q2N3UUFiaysyVmwxYko0bHNvYkR0dz09'
    })
}
export function getMusicDetail(id) {
    return request({
        url: '/music/song/detail?app_id=trko8ptipmkjblks&app_secret=Q2N3UUFiaysyVmwxYko0bHNvYkR0dz09&songId=' + id
    })
}
