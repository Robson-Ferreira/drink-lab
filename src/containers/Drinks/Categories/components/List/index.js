import React from 'react';

import RenderItem from '../RenderItem';
import ButtonBack from '../../../../../components/ButtonBack';
import Nav from '../../../../../components/Nav';

import './style.css';

const List = ({ data }) => {
    return (
        <>
            <Nav />
            <div id="categories">
                <h1>Choose a drink category created specially by our Lab Drink</h1>
                <div className="render">
                    { data && data.map((item, index) => (
                        <RenderItem item={item} key={index}></RenderItem>
                    )) }
                </div>
                <ButtonBack></ButtonBack>
            </div>
        </>
    );
}

export default List;