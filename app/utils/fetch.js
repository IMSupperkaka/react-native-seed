

const host = 'http://app.vmovier.com';
const apiVersion = 'apiv3';
const requestList = [];
export default fetchRequest = async (url, options) => {
    try {
        let response = await fetch(`${host}/${apiVersion}/${url}`, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            ...options
        });
        let responseJson = await response.json();
        if (responseJson.status != 0) {
            return;
        }
        return responseJson;
    } catch (error) {
        console.error(error);
    }
}