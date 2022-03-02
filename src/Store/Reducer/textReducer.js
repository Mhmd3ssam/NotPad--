export const textReducer = (state = [], action)=>{
    switch(action.type){
        case'SAVE_TEXT' :return state.concat([action.payload]);
    }
    return state;
};