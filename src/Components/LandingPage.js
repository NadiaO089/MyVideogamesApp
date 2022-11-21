import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGenres, getVideogames } from '../Redux/actions';
import s from '../Styles/Landing.module.css';



function LandingPage () {
    
const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres());    
    },[dispatch]);

    const handlerClick = (e) => {
        dispatch(getVideogames());
    };
    
    return (
        <div>
           <img className={s.background} src='https://wallpaperaccess.com/full/6110894.png' alt='BackGround' />
            <img className={s.img} src='https://media.tenor.com/SHu_Ynq3EGEAAAAC/welcome.gif' alt='Welcome' />
           <Link to='/home'><input type='button' className={s.button} onClick={handlerClick} /></Link>
        </div>
    )
}

export default LandingPage;