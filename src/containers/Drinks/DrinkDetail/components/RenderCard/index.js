import React from 'react';

import Nav from '../../../../../components/Nav';
import ButtonBack from '../../../../../components/ButtonBack';

import { Divider, Tag } from 'antd';

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
                            <p>{ item.strInstructions }</p>

                            <div className="">
                                <p>{ item.strIngredient1 }</p>
                            </div>
                        </main>

                        <footer className="footer">
                            <p>This is footer</p>
                        </footer>
                    </div>
                )) }
            </div>
            <ButtonBack></ButtonBack>
        </>
    );
}

export default RenderCard;