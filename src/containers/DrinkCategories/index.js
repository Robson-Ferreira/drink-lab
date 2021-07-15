import React, { useState } from 'react';
import Axios from '../../components/Axios/Axios';
import { message } from 'antd';

import ListCategories from './ListCategories';

const DrinkCategories = () => {
    const [categories, setCategories] = useState();

    const onSuccess = res => setCategories(res);

    const onError = (res) => {
        message.error(res.statusText, 5);
    }

    return (
        <Axios
            api="drinkCategories"
            run={true}
            onSuccess={onSuccess}
            onError={onError}
        >
            { categories && 
                <ListCategories data={categories} />
            }
        </Axios>
    );
}

export default DrinkCategories;