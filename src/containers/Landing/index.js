import React from 'react';
import { Link } from 'react-router-dom';

import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'

import './style.css'

const Landing = () => {
    return (
        <div id="landing">
            <header className="header">
                <h3>Drink Lab</h3>
            </header>

            <main className="main">
                <h1>Recognize Real.</h1>
                <p>
                    Reign Drink Lab started with a simple idea – use real, 
                    quality ingredients to create great tasting drinks that make people feel like royalty. 
                    It’s a straightforward approach that’s as honest and authentic as our ingredients.
                </p>
                <Link to='/categories' className="get-categories">Drink Categories</Link>
            </main>

            <footer className="footer">
                <a href={process.env.REACT_APP_INSTAGRAM_URL}><FacebookOutlined /></a>
                <a href={process.env.REACT_APP_FACEBOOK_URL}><InstagramOutlined /></a>
                <a href={process.env.REACT_APP_TWITTER_URL}><TwitterOutlined /></a>
            </footer>
        </div>
    );
}

export default Landing;