import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'

import './style.css';

const RenderItem = ({ item }) => {
    const [selected, setSelected] = useState({});
    const history = useHistory();

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        onChange();
    }, [selected]);

    const onChange = () => {
        console.log(selected);
        const url = `/drinks/?c=${selected}`;
        history.push(url);
    }

    const handleClick = category => {
        setSelected(category);
    }

    return (
        <>
            <button 
                className="item"
                type="button" 
                onClick={() => handleClick(item.strCategory)}
            >
                { item.strCategory }
            </button>
        </>
    );
}

export default RenderItem;