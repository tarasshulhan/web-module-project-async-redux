import axios from 'axios';

export const getPeople = ()=> {
    return (dispatch) => {
        dispatch(fetchStart());

        axios.get('https://randomuser.me/api/')
          .then(resp=> {
            dispatch(fetchSuccess(resp.data.results.slice(2)));
        })
        .catch(err => {
            dispatch(fetchError(err));
        });
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}