import React from 'react';

import './style.css';

const RenderItem = ({ item }) => {
    return (
        <div id="card">.
            <a href="/">
                <header className="header">
                    <h4> {item.strDrink }</h4>
                </header>

                <main className="main">
                    <img src={item.strDrinkThumb} alt="drink"></img>
                </main>
            </a>
        </div>
    );
}

export default RenderItem;