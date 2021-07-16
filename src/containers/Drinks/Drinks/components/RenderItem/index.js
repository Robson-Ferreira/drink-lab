import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

const RenderItem = ({ item }) => {

    const history = useHistory();

    const handleClick = (id) => {
        const path = `/drink/${id}`;
        history.push(path);
    }

    return (
        <div id="card" onClick={() => handleClick(item.idDrink)}>
            <header className="header">
                <h4> {item.strDrink }</h4>
            </header>

            <main className="main">
                <img src={item.strDrinkThumb} alt="drink"></img>
            </main>
        </div>
    );
}

export default RenderItem;