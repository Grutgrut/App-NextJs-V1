"use server";

import { log } from 'console';
import asyncPromiseRequest from './Requests'
import { revalidatePath, revalidateTag } from 'next/cache';
import { action, authAction } from '@/lib/safe-action';
import { z } from 'zod';
import { getSession } from './authProvider/authProvider';
import { reservationSchema, User, userSchema, userSchemaTest } from './validators';
import { TServiceCustomData, TServicesData } from '@/types';
import { produitSchemaSave, TProduitSave, TProduitsData, idSchema } from '@/types/produits';



let data4 = {
    url: 'auth/signup', params: {
        "email": "datas.email",
        "prenom": "datas.prenom",
        "nom": "datas.nom",
        "telephone": "datas.telephone",
        "adresse": "datas.adresse",
        "username": "datas.email",
        "password": "datas.password"
    }, method: 'POST', base: 'API'
};
let data3 = { url: 'users/user_exist', params: { username: 'phil.arnaud.goddet@gmail.fr' }, method: 'POST', base: 'API' };
let data = { url: 'service_custom', params: {}, method: 'GET', base: 'API' }
let data1 = { url: 'auth/logged', params: {}, method: 'GET', base: 'API' }
let data2 = { url: 'auth/login', params: { 'username': 'phil.arnaud.goddet@gmail.com', "password": 'test3' }, method: 'POST', base: 'API' }



export const getUsers = async () => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user', params: {}, method: 'GET', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};


export const getUserbyId = async (id: string) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user/' + id, params: {}, method: 'GET', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};

export const updateUser = action(userSchemaTest, async (values) => {
    console.log('values', values)
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user/' + values.id, params: values, method: 'PUT', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    revalidatePath('/dashboard')
    return response;
});

export const createUser = action(userSchemaTest, async (values) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user', params: values, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    revalidatePath('/dashboard')
    return response;
});

export const deleteUserbyId = async (id: number) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user/' + id, params: {}, method: 'DELETE', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    revalidatePath('/dashboard')
    return response;
};


export const getUsersPages = async (query: string) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'user', params: {}, method: 'GET', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};

export const signUp = async (formData: FormData): Promise<any> => {
    const { username, password } = Object.fromEntries(formData);
    let options = { username, password };
    let data = { url: 'auth/signup', params: options, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    revalidatePath('/signup')
    return response;
};

export const authorized = async (formData: FormData): Promise<any> => {
    const { username, password } = Object.fromEntries(formData);
    let options = { username, password };
    let data = { url: 'auth/signup', params: options, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    revalidatePath('/signup')
    return response;
};

/* export const getProducts = async () => {

    const params = {
        '1_table': 'prix',
        "1_fk": "id_produit",
        "2_table": "menu_du_jour_produit",
        "2_fk": "id_produit"
    };


    let url_1 = "https://api.la-plank-des-gones.fr/produit/custom";
    url_1 += '?' + (new URLSearchParams(params)).toString();
    console.log(url_1);

    const request = (url, params = {}, method = 'GET') => {
        let options = {
            method
        };
        if ('GET' === method) {
            url += '?' + (new URLSearchParams(params)).toString();
        } else {
            options.body = JSON.stringify(params);
        }

        return fetch(url, options).then(response => response.json());
    };

    let url = "https://api.la-plank-des-gones.fr/produit/custom";

    const get = (url, params) => request(url, params, 'GET');
    const post = (url, params) => request(url, params, 'POST');

    get(url, params)
        .then(response => {
            // Do something with response.
            //console.log(response);
        });

    const optionsPOST = {
        method: 'POST',
        body: JSON.stringify(params)
    };

    const optionsGET = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    };


    const datas = fetch(
        "https://api.la-plank-des-gones.fr/produit/custom?1_table=prix&1_fk=id_produit&2_table=menu_du_jour_produit&2_fk=id_produit", optionsGET)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            return json.data;
        });

    return datas;
    //https://jsonplaceholder.typicode.com/users
} */



export const getServices = async (): Promise<TServicesData> => {
    let data = { url: 'services', params: {}, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    //revalidatePath('/en/reservation')
    return response;
};


export const getServiceCustom = async (): Promise<TServiceCustomData> => {
    let data = { url: 'service_custom', params: {}, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    //revalidatePath('/en/reservation')
    return response;
};

export const getProduits = async (): Promise<TProduitsData> => {
    let data = { url: 'produit', params: {}, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    //revalidatePath('/en/reservation')
    return response;
};



export const getProduitbyId = async (id: string) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'produit/' + id, params: {}, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};


export const createProduit = action(produitSchemaSave, async (values) => {
    const session = await getSession()
    if (!session) return null
    let data = { url: 'produit', params: values, method: 'POST', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
});

export const deleteProduitbyId = async (id: number) => {
    let data = { url: 'produit/' + id, params: {}, method: 'DELETE', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};

export const updateProduitById = action({ idSchema, produitSchemaSave }, async ({ id, values }: { id: number, values: TProduitSave }) => {
    console.log(id);
    console.log(values);


    let data = { url: 'produit/' + id, params: values, method: 'PUT', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
});


export const getCatProduits = async () => {
    let options = {
        '1_fk': 'id_sub_cat',
        '1_table': 'produit',
    };

    let data = { url: 'produit_sub_cat/custom', params: options, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};

export const getCategories = async () => {
    let data = { url: 'produit_sub_cat', params: {}, method: 'GET', base: 'API', cache: 'no-store' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};




export const createReservation = action(reservationSchema, async (values) => {
    let data = { url: 'reservation', params: values, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
});


export const sendMailThanks = async (values: any) => {
    let data = { url: 'api/email/test', params: values, method: 'POST', base: 'LOCAL' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    return response;
};