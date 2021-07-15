import React, { useState, useEffect } from 'react';

import ListDrinks from './ListDrinks';
import { request, api } from '../../util/handlerRequestUtil';
import { message } from 'antd';
import { useHistory } from 'react-router-dom'

const Drinks = ({ history }) => {
    const [drinks, setDrinks] = useState(null);
    const historyRouter = useHistory();

    useEffect(() => {
        const getDrinksByCategory = async () => {
            const { search } = history.location;
            if (search === "") {
                alert("The query type is doesn't exist or is not supported from the API");
                return historyRouter.goBack()
            }
            try {
                const data = await request(api.getDrinksByCategory(search));
                setDrinks(data.drinks);
            } catch (error) {
                message.error(error.data)
            }
        }

        getDrinksByCategory();
    }, []);

    return (
        <>
            { drinks && (
                <ListDrinks data={drinks}></ListDrinks>
            ) }
        </>
    )
}

export default Drinks;