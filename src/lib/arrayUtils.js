export const addArrayItem = (array, item) => {
    array.push(item);
    return array;
}

export const updateArrayItem = (array, item) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === item.id) {
            array[i] = item;
        }
    }
    return array;
}

export const removeArrayItem = (array, item) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === item.id) {
            array.splice(i, 1);
        }
    }
    return array;
}


export const removeArrayItemById = (array, itemId) => {
    for (var i = 0; i < array.length; i++) {
        if (array[i].id === itemId) {
            array.splice(i, 1);
        }
    }
    return array;
}
