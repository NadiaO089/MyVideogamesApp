import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearErrors } from "../Redux/actions";
import s from '../Styles/Errors.module.css';

function Errors () {

    const errors = useSelector(state => state.errors);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        return  () => {
            dispatch(clearErrors());
            history.push("/");
        }
    },[]);
    
    return (
        <div>
         <div>
            <img className={s.img} src='https://i.fbcd.co/products/original/2204-m10-i020-n033-mainpreview-736fbf552ac5210bbab926acbfd42dfdfca5b2b26ca98f39300e1c7c73d465e1.jpg' alt='Game Over'/>
            <Link to='/home'><input className={s.button} type='button'/></Link>
            <p className={s.title}>{errors.message}</p>
            
         </div>
        </div>
    )
}

export default Errors;