import React from 'react';

import Nav from '../../../../../components/Nav';
import ButtonBack from '../../../../../components/ButtonBack';

import { Tag } from 'antd';

import './style.css';

const RenderCard = ({ data }) => {
    console.log(data);
    return (
        <>
            <Nav></Nav>
            <div id="render">
                { data.map((item) => (
                    <div className="card-drink" key={item.idDrink}>
                        <header className="header">
                            <img src={item.strDrinkThumb}></img>
                            <h1>{ item.strDrink }</h1>

                            <div className="tags">
                                <Tag color="green">{item.strAlcoholic}</Tag>
                                <Tag color="blue">{item.strCategory}</Tag>
                                <Tag color="red">{item.strGlass}</Tag>
                            </div>
                        </header>

                        <main className="main">
                            <div className="info">
                                <strong>Ingredients</strong>
                                <span>{ item.strIngredient1 }, {  item.strIngredient2 }, {  item.strIngredient3 }</span>
                            </div>

                            <p>{ item.strInstructions }</p>
                        </main>
                    </div>
                )) }
            </div>
            <ButtonBack></ButtonBack>
        </>
    );
}

export default RenderCard;