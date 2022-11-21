import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideogameDetail, clearDetail } from '../Redux/actions.js';
import NavBar from './NavBar';
import s from '../Styles/Detail.module.css';


function Detail () {

const dispatch = useDispatch();
const detail = useSelector(state => state.detail);
const loading = useSelector(state => state.loading);
const errors = useSelector(state => state.errors);
const {idVideogame} = useParams();
const history = useHistory();

useEffect(() => {
   dispatch(getVideogameDetail(idVideogame))
   return () => dispatch(clearDetail())
}, [dispatch, idVideogame])

    return (
        <div>
         {errors.message ? 
            history.push("/errors")
        :
        <div>
            <div>
                <NavBar />
            </div>

            {loading? <img className={s.img} src='https://forum.defold.com/uploads/default/original/2X/5/5eb75eb38637375a13384195971eee34e22f15a6.gif' alt= 'Loading...'/>
        : <div className={s.container} key={detail.id}>

            <img className={s.imgDetail} src={detail.background_image} alt='background'/>  
            <div className={s.container1}>
            <h2 className={s.title}>{detail.name}</h2>
            <h4 className={s.text}>Description: </h4>
            <h4 className={s.subtitle}>{detail.description}</h4>
            <h4 className={s.text}>Released: </h4>
            <h4 className={s.subtitle}>{detail.released}</h4>
            <h4 className={s.text}>Rating: </h4>
            <h4 className={s.subtitle}>{detail.rating}</h4>
            <div className={s.container2}>
            <h4 className={s.subtitle}>Genres: </h4>
            {detail.genres?.map(g => {
            return <h4 className={s.subtitle}>{g.name}</h4>
           })}
           </div>
           <div className={s.container2}>
            <h4>Platforms:</h4> 
            {detail.platforms?.map(p => {
            return <h4 >{p}</h4>
           })}
           </div>
        </div>
        </div>}
     </div>}
     </div>
    )
}

export default Detail;