import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css'

const Nav = () => {
    const history = useHistory();
    return (
        <div id="nav">
            <div className="logo" onClick={() => history.push('/')}>
                <h3>Lab Drink</h3>
            </div>
        </div>
    );
}

export default Nav;