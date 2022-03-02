const initialState = [];
export const imageReducer = (state = initialState, action)=>{
    switch(action.type){
        case'SAVE_Images' :return state.concat([action.payload])
    }
    return state;
};