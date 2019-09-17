import fetchRequest from '../utils/fetch';

export const getConfig = () => {
    return fetchRequest('config/config/5.7.2', {
        method: 'GET'
    })
}