export const imageReducer = (state = [], action)=>{
    switch(action.type){
        case'SAVE_IMAGES' :return state.concat([action.payload])
        break;
        case 'EDITE_IMAGES' : return action.payload
        break;
    }
    return state;
};