import React, { useState, useEffect } from 'react';

import List from './components/List';
import { message } from 'antd';

import { request, api } from '../../../util/handlerRequestUtil';
import './style.css';

const DrinkCategories = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        initialize();
    }, []);

    const initialize = async () => {
        try {
            const data = await request(api.getCategories());
            onSuccess(data.drinks);
        } catch(error) {
            onError(error);
        }
    }

    const onSuccess = data => setCategories(data);

    const onError = (error) => {
        message.error(`Error processing request. Status ${error.status}`,);
    }

    return (
        <>
            { categories && (
                <List data={categories} />
            ) }
        </>
    );
}

export default DrinkCategories;