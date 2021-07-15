import React from 'react';

import RenderItem from './RenderItem';
import ButtonBack from '../../../components/ButtonBack';
import Nav from '../../../components/Nav';

import './style.css';

const ListCategories = ({ data }) => {
    return (
        <>
            <Nav />
            <div id="categories">
                <div className="render">
                    { data.drinks.map((item) => (
                        <RenderItem item={item} key={item.strCategory}></RenderItem>
                    )) }
                </div>
                <ButtonBack to='/'></ButtonBack>
            </div>
        </>
    );
}

export default ListCategories;