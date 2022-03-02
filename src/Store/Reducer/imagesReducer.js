export const imageReducer = (state = [], action)=>{
    switch(action.type){
        case'SAVE_Images' :return state.concat([action.payload])
    }
    return state;
};