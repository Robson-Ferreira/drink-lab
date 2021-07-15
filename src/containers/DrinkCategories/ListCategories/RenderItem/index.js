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
        const url = `/drinks?c=${selected}`;
        history.push(url);
    }

    const handleClick = category => {
        setSelected(category);
    }

    return (
        <div id="item">
            <main>
                <span>{ item.strCategory }</span>
            </main>

            <footer>
                <button type="button" onClick={() => handleClick(item.strCategory)}>Go</button>
            </footer>
        </div>
    );
}

export default RenderItem;