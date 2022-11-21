import React, {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames, clearDetail } from '../Redux/actions';
import s from '../Styles/Created.module.css';

function Created () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearDetail());
    },[dispatch]);

    const handlerOnClick = (e) => {
        dispatch(getVideogames());
    }

    return (
        
        <div className={s.container}>  
            <img className={s.img} src='http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/57a04e1c44c4284.png' alt='You win!' />  
            <p className={s.title}>Your video game was created successfully!</p>
            <div className={s.container1}>
            <Link to={`/home`}><button className={s.button} onClick={handlerOnClick}>Go Home</button></Link>
            <Link to={`/create`}><button className={s.button}>Create a new Videogame</button></Link>
            </div>
            </div>
    )
}

export default Created;
