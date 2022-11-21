import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogamesByName } from '../Redux/actions';
import s from '../Styles/NavBar.module.css';
import VGS from '../Icons/videogames.jpg';

function NavBar () {

  const dispatch = useDispatch();
  const [input, setInput] = useState('');

const handlerChange = (e) => {
  setInput(e.target.value);
}
  
const handlerClick = (e) => {
  dispatch(getVideogamesByName(input));

}

    return (
        <div>
          <nav className={s.header}>
            <div>
              <Link to='/home'><img className={s.img} src={VGS} alt='Logo-Home'/></Link>
            </div>
            <div className={s.searchbar}>
              <input 
              className={s.search}
              type='text' 
              placeholder='Search your Videogame...'
              value={input}
              onChange={handlerChange}/>
              <input  className={s.button} type='button'onClick={handlerClick} value='Search'/>
            </div>

            <div className={s.links}>
            <Link to='/home'><h4 className={s.text}>Home</h4></Link>
            <Link to='/about'><h4 className={s.text}>About</h4></Link>
            <Link to='/create'><h4 className={s.text}>Create</h4></Link>
            </div>
          </nav>
        </div>
    )
}

export default NavBar;