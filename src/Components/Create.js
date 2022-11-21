import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { create, getGenres, clearDetail } from '../Redux/actions';
import NavBar from './NavBar';
import Created from './Created';
import s from '../Styles/Create.module.css';

function Create () {

    const genres = useSelector(state => state.genres);
    const created = useSelector(state => state.detail);
    const error = useSelector(state => state.errors);
    const history = useHistory();

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGenres());
    },[]);

    const inicialState = {
        name:'',
        description:'',
        released:'',
        genres:[],
        platforms:[],
        rating: 0.0
    }

    const [input, setInput] = useState(inicialState);
    const [platform, setPlatform] = useState('');
    const [genre, setGenre] = useState({});
    const [errors, setErrors] = useState({
        name:'',
        description:'',
        released:'',
        genres:'Choose a genre',
        platform:'',
        rating: ''
   });

   let disable = !input.name || errors.name || !input.description || errors.description || !input.platforms.length || errors.platform.length || errors.rating || errors.released ? true : false

    const validateName = (e) => {

            if(!/^[A-Z].*$/.test(e.target.value)){//name
                setErrors({
                    ...errors,
                    [e.target.name]: `Enter a valid ${e.target.name}`
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })
            } 
            setInput({
                ...input,
                [e.target.name]:e.target.value
            });
        }
      
        const validateDescription = (e) => {

            if(!/^[\s\S]{1,200}$/.test(e.target.value)){//description
                setErrors({
                    ...errors,
                    [e.target.name]: `Max = 200 characters`
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })
            } 
            setInput({
                ...input,
                [e.target.name]:e.target.value
            });
        }

        const validateRating = (e) =>  {

            if(!/^[0-9]+([.])?([0-9]+)?$/.test(e.target.value) || e.target.value > 10){//rating
                setErrors({
                    ...errors,
                    [e.target.name]: `Enter a valid ${e.target.name} max 10`
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })
            } 
            setInput({
                ...input,
                [e.target.name]:e.target.value
            });
    }


    const validateReleased = (e) => {
        let d = new Date ();
        let released = e.target.value;
        let date = released.split('-');

        if(date[0] >= d.getFullYear() && date[1] >= (d.getMonth() +1) && date[2] > d.getDate()) {//released
            setErrors({
                ...errors,
                [e.target.name]: `Enter a valid ${e.target.name}`
            });
        } else {
            setErrors({
                ...errors,
                [e.target.name]:''
            })
        } 
        console.log(e.target.value)
            setInput({
                ...input,
                [e.target.name]:e.target.value
            });
        }

        const validatePlatform = (e) => {
            let value = e.target.value;

            if(value !== 'Play Station 3' && value !== 'Play Station 4' && value !== 'Play Station 5' && value !== 'Xbox 360' && value !== 'Xbox One' && value !== 'Xbox Series' && value !== 'PC' && value !== 'Nintendo' && value !== 'MacOS' && value !== 'Android' && value !== 'Linux'){
                setErrors({
                    ...errors,
                    [e.target.name]: `Enter a valid ${e.target.name}: Play Station 3/4/5, PC, Xbox One/360/Series, Nintendo, MacOS, Andorid, Linux`
                });
            } else {
                setErrors({
                    ...errors,
                    [e.target.name]:''
                })
            }
            setPlatform(e.target.value)
        }

        const validateGenres = (e) => {

            if(e.target.value === 'choose'){
                setErrors({
                       ...errors,
                       [e.target.name]: `Choose a genre`
                   });
   
               } else {
                   setErrors({
                       ...errors,
                       [e.target.name]:''
                   })
               }   
           let genreName = genres.filter(g => g.id == e.target.value)
           setGenre(genreName[0]);
        }

        const handlerPlatformClick = (e) => {
            setInput({
                ...input,
                platforms: [...input.platforms, platform]
            })
            setPlatform('');
        }

        const handlerGenresClick = (e) => {
     
            setInput({
                ...input,
                genres: [...input.genres, genre]
            })
            setGenre({});
        }

    const handlerSubmit = (e) => {
        e.preventDefault();
        dispatch(create(input));
        setInput(inicialState);

    }

    return (
        <div>
            {error.message ? 
                history.push("/errors")
        :
        <div>
            {Object.keys(created).length? 
            
            history.push('/created')
        
            :
            <div>
            <NavBar />
            <div className={s.background}>
            
            <div className={s.container}>
            <h1 className={s.title}>New Videogame</h1>
            <form onSubmit={handlerSubmit}>
            
                <label className={s.subtitle}>Name: </label>
                <input 
                className={!errors.name? s.search : s.dangerInput}
                type='text'
                name='name'
                placeholder='*Required data'
                value={input.name}
                onChange={(e) => validateName(e)}/>
                <br/>
                {!errors.name? null : <p className={s.dangerText}>{errors.name}</p>}

                <label className={s.subtitle}>Description: </label>
                <input 
                className={!errors.description? s.search : s.dangerInput}
                type='text'
                name='description'
                placeholder='*Required data'
                value={input.description}
                onChange={(e) => validateDescription(e)}/>
                <br/>
                {!errors.description? null : <p className={s.dangerText}>{errors.description}</p>}

                <label className={s.subtitle}>Released: </label>
                <input 
                className={!errors.released? s.search : s.dangerInput}
                type='date'
                name='released'
                value={input.released}
                onChange={(e) => validateReleased(e)}/>
                <br/>
                {!errors.released? null : <p className={s.dangerText}>{errors.released}</p>}

                <label className={s.subtitle}>Rating: </label>
                <input 
                className={!errors.rating? s.search : s.dangerInput}
                type='number'
                name='rating'
                value={input.rating}
                onChange={(e) => validateRating(e)}/>
                <br/>
                {!errors.rating? null : <p className={s.dangerText}>{errors.rating}</p>}

                <div className={s.container1}>
                <p className={s.text}>Select a genre and then Click to Add</p>
                <label className={s.subtitle}>Genres:</label> {input.genres?.map(g => (
                    <p>{g.name}</p>
                ))}
                <select className={s.search} defaultValue='choose' name='genres'  focus onClick={(e) => validateGenres(e)}>
                <option className={s.option} value='choose'>Choose your genres</option>
                {genres?.map((g) => (
                <option className={s.option} key={g.id} value={g.id}>{g.name}</option>
                ))}
                </select>

                <input className={!errors.genres? s.button : s.disable} type='button' onClick={handlerGenresClick} value='Add Genre' disabled={errors.genres ? true:false}/>
                <br/>
                    </div>
                    <div className={s.container1}>
                    <p className={s.text}>Click to add a new platform to your Videogame</p>
                <label className={s.subtitle}>Platforms (*Required data):</label> {input.platforms?.map(p => (
                    <p className={s.text1}>{p}</p>
                ))}
                <br/>
        
                <input
                className={!errors.platform ? s.search : s.dangerInput}
                type="text"
                name="platform"
                placeholder='Play Station 3/4/5, PC, Xbox One/360/Series, Nintendo, MacOS, Andorid, Linux'
                value={platform}
                onChange={(e) => validatePlatform(e)}
                />
            
                <input className={errors.platform || !platform.length ? s.disable : s.button} type='button' onClick={handlerPlatformClick} value='Add Platform' disabled={!platform || errors.platform ? true:false} />
                </div>
                {!errors.platform? null : <p className={s.dangerText}>{errors.platform}</p>}
                <br/>
                    
                <input 
                className={disable ? s.disableSubmit : s.submit}
                type='submit'
                value='CREATE'
                disabled = {!input.name || errors.name || !input.description || errors.description || !input.platforms || errors.platform || errors.rating || errors.released ? true:false}
                />
            </form>
            </div>
            </div>
            </div>}
            </div> }
        </div>
    )
}

export default Create;