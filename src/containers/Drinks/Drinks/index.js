import React, { useState, useEffect } from 'react';

import List from './components/List';
import { request, api } from '../../../util/handlerRequestUtil';

import { message } from 'antd';
import './style.css';

const Drinks = ({ history, ...props }) => {
    const [drinks, setDrinks] = useState(null);

    useEffect(() => {
        getDrinksByCategory();
    }, []);

    const getDrinksByCategory = async () => {
        try {
            const { search } = props.location;
            const data = await request(api.getDrinksByCategory(search));
            onSuccess(data.drinks);
        } catch (error) {
            onError(error);
        }
    }

    const onSuccess = data => setDrinks(data);

    const onError = error => {
        message.error(`Error processing request. Status ${error.status}`,);
    };

    return (
        <>
            { drinks && (
                <List data={drinks}></List>
            ) }
        </>
    );
}

export default Drinks;