import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import Pagination from './Pagination';
import s from '../Styles/Home.module.css';



function Home () {

    const loading = useSelector(state => state.loading);
    const videogames = useSelector(state => state.videogames);
    const errors = useSelector(state => state.errors);
    const history = useHistory();

    useEffect(() => {

    },[videogames]);

    return (
        <div>
            {errors.message ? 
                history.push("/errors")

            :
            <div>
             <div>
                <NavBar />
            </div>

            {loading? <img className={s.img} src='https://i.pinimg.com/originals/3d/80/64/3d8064758e54ec662e076b6ca54aa90e.gif' alt= 'Loading...'/>
        :
            <div>
                <Pagination/>
            </div>
        }   </div>  
    }
    </div>
    )
    }
export default Home;