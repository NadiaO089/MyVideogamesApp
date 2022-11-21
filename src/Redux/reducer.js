
import byGenre from "../Filters/byGenre";
import dbOrApi from "../Filters/dbOrApi";

import { GET_VIDEOGAMES, LOADING, GET_GENRES, GET_VIDEOGAME_DETAIL, CLEAR_DETAIL, GET_VIDEOGAMES_BY_NAME, CREATE, ERRORS, CLEAR_ERRORS, INORDER, FILTER_BY_SOURCE, FILTER_BY_GENRE, DELETE } from "./actionTypes";

const inicialState = {
    videogames: [],
    allVideogames: [],
    detail: {},
    genres: [],
    loading: false,
    orderAndFilter: {order:'default', source:'all', genre:'all'},
    errors:{}
}

function reducer (state=inicialState, action) {
    switch(action.type){
        case GET_VIDEOGAMES:
            return {
                ...state,
                loading: false,
                videogames: action.payload,
                allVideogames: action.payload,
                orderAndFilter: {order:'default', source:'all', genre:'all'}
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload
            }
        case GET_VIDEOGAME_DETAIL:
            return {
                ...state,
                loading: false,
                detail: action.payload
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                detail: {}
            }
        case GET_VIDEOGAMES_BY_NAME:
            return {
                ...state,
                loading: false,
                videogames: action.payload,
                allVideogames: action.payload,
                orderAndFilter: {order:'default', source:'all', genre:'all'}
            }
        case CREATE: 
            return {
                ...state,
                detail: action.payload
            }
        case FILTER_BY_SOURCE:
            const allTheVideogames = state.allVideogames;
            let stateFilteredBySource = [];

            if(action.payload.genre === 'all'){
                stateFilteredBySource = action.payload.source === 'dbs' ? dbOrApi(allTheVideogames,1,0) : dbOrApi(allTheVideogames,0,1);
            } else {
                let aux;
                if(action.payload.source === 'dbs') 
                { aux=dbOrApi(allTheVideogames,1,0);
                } else if(action.payload.source === 'apis') {
                    aux=dbOrApi(allTheVideogames,0,1);
                 } else aux=allTheVideogames;
                 
                stateFilteredBySource = byGenre(aux,action.payload.genre);
            }
            
            return {
                ...state,
                orderAndFilter: action.payload,
                videogames: action.payload.source === 'all' && action.payload.genre === 'all' ? allTheVideogames : stateFilteredBySource
            };

        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames;
            let stateFilteredByGenre = [];

            if(action.payload.source === 'all'){
                stateFilteredByGenre = action.payload.genre === 'all' ? allVideogames : byGenre(allVideogames,action.payload.genre);
            } else {
                let Aux = action.payload.genre === 'all' ? allVideogames : byGenre(allVideogames,action.payload.genre);
                stateFilteredByGenre = action.payload.source === 'dbs' ? dbOrApi(Aux,1,0) : dbOrApi(Aux,0,1);
            }
 
            return {
                ...state,
                orderAndFilter: action.payload,
                videogames: stateFilteredByGenre
            }

        case INORDER:
          
            const descByRating = (x, y) => {
                if (x.rating > y.rating) {
                  return 1;
                }
                if (x.rating < y.rating) {
                  return -1;
                }
                return 0;
            };

            const ascByRating = (x, y) => {
                if (x.rating > y.rating) {
                  return -1;
                }
                if (x.rating < y.rating) {
                  return 1;
                }
                return 0; 
            };

            const descByName = (x, y) => {
                if (x.name < y.name) {return 1;}
                if (x.name > y.name) {return -1;}
                return 0;
            };

            const ascByName = (x, y) => {
                if (x.name < y.name) {return -1;}
                if (x.name > y.name) {return 1;}
                return 0;
            };
            
            const allVgs = action.payload.source === 'all' && action.payload.genre === 'all' ? state.allVideogames : state.videogames;
            let inorder=[];

            if(action.payload.order === 'ZtoA'){
                inorder=allVgs.sort(descByName);
            }

            else if(action.payload.order === 'AtoZ'){
                inorder=allVgs.sort(ascByName);
            }

            else if(action.payload.order === 'highRating'){
                inorder=allVgs.sort(ascByRating);
            }

            else if(action.payload.order === 'lowRating'){
                inorder=allVgs.sort(descByRating);
            }
           else return;
           
             return{
                    ...state,
                    orderAndFilter: action.payload,
                    videogames: inorder
                }

        case ERRORS:
            return {
                ...state,
                loading:false,
                errors: action.payload
            }
        case CLEAR_ERRORS:
                return {
                    ...state,
                    errors:{}
                }
        case DELETE:
                return {
                    ...state,
                    videogames: state.videogames.filter(e=> e.id !== action.payload),
                    allVideogames: state.videogames.filter(e=> e.id !== action.payload),
                }
        default: 
            return state;
    }
}

export default reducer;