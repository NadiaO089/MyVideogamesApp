import React from 'react';
import Videogame from './Videogame';
import s from '../Styles/Videogames.module.css';

function Videogames (props) {

const items = props.items.map(item => {
    return (
    <div>
    <Videogame 
        key={item.id}
        id={item.id}
        name={item.name}
        background_image={item.background_image}
        genres={item.genres}
        rating={item.rating}
    />
</div>)
})

    return (
        <div>
        <div className={s.container1}>
            <button  className={s.button} onClick={props.prevHandler}>{`<<`}</button>
            <p className={s.text}>{props.currentPage}</p>
            <button  className={s.button} onClick={props.nextHandler}>{`>>`}</button>
        </div>
        <div>
            <ul className={s.container}>
                {items}
            </ul>
        </div>
        </div>
    )
}

export default Videogames;