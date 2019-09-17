import fetchRequest from '../utils/fetch';

export const getHomeList = (data) => {
    return fetchRequest('index/index', {
        method: 'GET',
        params: data
    })
}