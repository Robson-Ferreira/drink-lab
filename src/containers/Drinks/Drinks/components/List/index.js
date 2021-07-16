import React from 'react';

import RenderItem from '../RenderItem';
import Nav from '../../../../../components/Nav';
import ButtonBack from '../../../../../components/ButtonBack';

import './style.css';

const ListDrinks = ({ data }) => {
    return (
        <>
            <Nav />
            <div id="list-drinks">
                <div className="search">
                    <input type="text"></input>
                </div>
                <div className="render">
                    { data.map((item) => (
                        <RenderItem item={item} key={item.idDrink}></RenderItem>
                    )) }
                </div>
                <ButtonBack to="/categories"></ButtonBack>
            </div>
        </>
    );
}

export default ListDrinks;