import axios from 'axios';
import { GET_VIDEOGAMES, LOADING, GET_GENRES, GET_VIDEOGAME_DETAIL, CLEAR_DETAIL, GET_VIDEOGAMES_BY_NAME, CREATE, ERRORS, CLEAR_ERRORS, INORDER, FILTER_BY_SOURCE, FILTER_BY_GENRE, DELETE } from "./actionTypes";

export const loading = () => {
    return {
        type: LOADING
    };
}

export const getVideogames = () => {
    return function (dispatch) {
        dispatch(loading());
        return axios.get(`http://localhost:3001/videogames`)
            .then(response => {
                dispatch({
                    type: GET_VIDEOGAMES,
                    payload: response.data
                });
            })
            .catch(e => dispatch(errors(e)));
    }
};

export const getVideogamesByName = (name) => {
    return function (dispatch) {
        dispatch(loading());
        return axios.get(`http://localhost:3001/videogames?name=${name}`)
            .then(response => {
                dispatch({
                    type: GET_VIDEOGAMES_BY_NAME,
                    payload: response.data
                });
            })
            .catch(e => dispatch(errors(e)));
    }
};

export const getGenres = () => {
    return function (dispatch) {
        return axios.get('http://localhost:3001/genres')
            .then(response => {
                dispatch({
                    type: GET_GENRES,
                    payload: response.data
                });
            })
            .catch(e => dispatch(errors(e)));
    }
};

export const getVideogameDetail = (id) => {
    return function (dispatch) {
        dispatch(loading());
        return axios.get(`http://localhost:3001/videogame/${id}`)
            .then(response => {
                dispatch({
                    type: GET_VIDEOGAME_DETAIL,
                    payload: response.data
                });
            })
            .catch(e => dispatch(errors(e)));
    }
};

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL
    }
};

export const create = (body) => {
    return function (dispatch) {
        return axios.post('http://localhost:3001/videogames', body)
            .then(response => {
                dispatch({
                    type: CREATE,
                    payload: response.data
                });
            })
            .catch(e => dispatch(errors(e)));
    }
};

export const filterByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
};

export const filterBySource = (payload) => {
    return {
        type: FILTER_BY_SOURCE,
        payload
    }
};

export const inorder = (payload) => {

        return {
            type: INORDER,
            payload
        }
    
   
};

export const errors = (e) => {
    return {
        type: ERRORS,
        payload: e
    }
};

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    }
};

export const Delete = (id) => {
    
    if (typeof id === 'string') {
        return function(dispatch){
            return axios.delete(`http://localhost:3001/videogame/${id}`)
            .then(response => {
                dispatch({
                    type: DELETE,
                    payload: id
                });
            })
            .catch(e => dispatch(errors(e)));
        }  
    } else return {
            type: DELETE,
            payload: id
    }
      
  
};







