import React from 'react';
import NavBar from './NavBar';
import s from '../Styles/About.module.css';

function About () {
    return (
        <div>
            <NavBar />

            <div className={s.container}>
                <h2>Hi! I'm Nadia</h2>
                <h4>I'm FullStack Developer en progress...</h4>
                <h4>And this is my first complete web app.</h4>

            </div>
        </div>
    )
}

export default About;