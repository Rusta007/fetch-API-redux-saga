const initialState = {
    data : null,
    loading : false,
    error : null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type){
        case 'FECTH_DATA_REQUEST':
            return {...state, loading : true};
        case 'FECTCH_DATA_SUCCESS' : 
            return {...state, data:action.data, loading:false};
        case 'FETCH_DATA_ERROR':
            return {...state, error : action.error, loading : false};
        default :
            return state;
        }
        
}
export default dataReducer