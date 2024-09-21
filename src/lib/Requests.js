/*
cache = 'force-cache'
cache: 'no-store'
next: { revalidate: 10 }
*/

const request = (url, params, method, base, header = true, cache = 'force-cache') => {
    let options = {
        method,
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
        cache
    };


    let serviceBase = 'https://apiapp.la-plank-des-gones.fr/';
    if ('APP' === base) {
        serviceBase = 'https://la-plank-des-gones.fr/';
    }
    if ('LOCAL' === base) {
        serviceBase = 'http://localhost:3000/';
    }
    serviceBase = serviceBase + url;



    /* if (header === true) {
        let user = JSON.parse(localStorage.getItem("user"))
        console.error('User:', user)
        
        let customHeaders = {
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Auth-Token': user.token
            // 'Access-Control-Allow-Origin': '*'
        };
        options.headers = customHeaders;
    } */



    if ('GET' === method) {
        if (Object.keys(params).length !== 0) {
            serviceBase += '?' + (new URLSearchParams(params)).toString();
        }
    } else {
        options.body = JSON.stringify(params);
    }

    return {
        url: serviceBase,
        options: options
    };
};

const promiseRequest = datas => new Promise(resolve => {
    console.log('datas', datas)
    const response = request(datas.url, datas.params, datas.method, datas.base, datas.header, datas.cache);
    console.log('request', response)
    fetch(response.url, response.options)
        .then((response) => response.json())
        .then((responseJson) => {
            //console.log(responseJson);
            resolve(responseJson);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log('data rendered');
        });
});

const asyncPromiseRequest = async (values) => {
    const response = await promiseRequest(values);
    console.log("Response from:", response);
    if (response) {
        return response;
    } else {
        return response;
    }
}

export default asyncPromiseRequest