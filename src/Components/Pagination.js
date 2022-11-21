import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { filterByGenre, filterBySource, getVideogames, inorder } from '../Redux/actions';
import Videogames from './Videogames';
import s from '../Styles/Pagination.module.css';


function Pagination () {

    const videogames = useSelector(state => state.videogames);
    const genres = useSelector(state => state.genres);
    const orderAndFilter = useSelector(state => state.orderAndFilter)

    const dispatch = useDispatch();

    const ITEMS_PER_PAGE = 15;

    const [items, setItems] = useState([...videogames].splice(0,ITEMS_PER_PAGE));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=>{
        setItems([...videogames].splice(0,ITEMS_PER_PAGE));
        setCurrentPage(1);
    
    },[videogames]);

    const prevHandler = () => {
        console.log('prev');
        const prevPage = currentPage - 1;

        if(prevPage <= 0)  return;

        let firstIndex = (prevPage - 1) * ITEMS_PER_PAGE;

        setItems([...videogames].splice(firstIndex,ITEMS_PER_PAGE));
        setCurrentPage(prevPage);
    };
  

    const nextHandler = () => {
        console.log('next');
        const total = videogames.length;
        let nextPage = currentPage + 1;
        let firstIndex = currentPage * ITEMS_PER_PAGE;

        if(firstIndex >= total) return;

        setItems([...videogames].splice(firstIndex,ITEMS_PER_PAGE));
        setCurrentPage(nextPage);
    };
    
    const handlerRestart = (e) => {
        dispatch(getVideogames());
    };

    const handlerOrder = (e) => {
    
        dispatch(inorder({
            order: e.target.value,
            genre: orderAndFilter.genre,
            source: orderAndFilter.source
        }));
      
        setItems([...videogames].splice(0,ITEMS_PER_PAGE));
        setCurrentPage(1);
    };

    const handlerFilterGenres = (e) => {

        dispatch(filterByGenre({
            order: orderAndFilter.order,
            genre: e.target.value,
            source: orderAndFilter.source
        }));
    };

    const handlerFilterSource = (e) => {

        dispatch(filterBySource({
            order: orderAndFilter.order,
            genre: orderAndFilter.genre,
            source: e.target.value
        }));
    };

    return (
        <div>
            <div className={s.header}> 
                <div className={s.container}>
                    <input className={s.button} type='button' onClick={(e)=>handlerRestart(e)} value='Restart' />
                <span className={s.title}>Order By</span>
                    <select className={s.search} name='order' focus onChange={(e) => handlerOrder(e)}>
                        <option>{orderAndFilter.order}</option>
                        <option value='AtoZ'>A to Z</option>
                        <option value='ZtoA'>Z to A</option>
                        <option value='highRating'>Highest Rating</option>
                        <option value='lowRating'>Lowest Rating</option>
                    </select>
                </div>
                <div className={s.container}>
                    <span className={s.title}>Filters</span>
                <div>
                    <label className={s.subtitle}>Genre</label>
                    <select className={s.search} name='genre' focus onChange={(e) => handlerFilterGenres(e)}>
                        <option>{orderAndFilter.genre}</option>
                        <option value='all'>All Genres</option>
                        {genres?.map((g) => (
                        <option key={g.id} value={g.name}>{g.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className={s.subtitle}>Source</label>
                    <select className={s.search} name='source' focus onChange={(e) => handlerFilterSource(e)}>
                            <option>{orderAndFilter.source}</option>
                            <option value='all'>All</option>
                            <option value='apis'>Api's</option>
                            <option value='dbs'>Db's</option>
                    </select>
                </div>
                </div>

            </div>
            <div>
                <Videogames 
                items={items} 
                currentPage={currentPage} 
                prevHandler={prevHandler}
                nextHandler={nextHandler}
                />
            </div>
        </div>
 )
}

export default Pagination;