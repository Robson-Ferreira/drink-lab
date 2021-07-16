import React, { useState ,useEffect } from 'react';

import RenderCard from './components/RenderCard';
import { api, request } from '../../../util/handlerRequestUtil';

const DrinkDetail = ({ history, ...props }) => {

    const [drink, setDrink] = useState(null);

    const drinkId = props.match.params.id;
    useEffect(() => {
        const initialize = async () => {
            const data = await request(api.getDrinkById(drinkId));
            setDrink(data.drinks);
        }
        initialize();
    }, [drinkId]);

    return (
        <>
            { drink && (
                <RenderCard data={drink} />
            )}
        </>
    );
}

export default DrinkDetail;