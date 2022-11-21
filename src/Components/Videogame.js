import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Delete } from '../Redux/actions';
import s from '../Styles/Videogame.module.css';

function Videogame (props) {

const dispatch = useDispatch();

    const handlerClick = (e) => {
        dispatch(Delete(props.id));
    };

    return (
        <div className={s.container} key={props.id}>
            <div hidden>{props.rating}</div>
            
            <div className={s.container2}>
            <input className={s.button} type='button' onClick={(e)=>handlerClick(e)} value='x' />
            </div>
            
            <img className={s.img} src={props.background_image} alt='background image'/>
            <div className={s.container1}>
            <Link to={`/videogame/${props.id}`}><h2 className={s.title}>{props.name}</h2></Link>
            <div className={s.container2}>
            {props.genres.map(e => (
                <h4 className={s.text}>{` ${e.name} `}</h4>
            )
            )}
           </div>
           </div>
        </div>
    )
}

export default Videogame;