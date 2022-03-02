export const localizationReducer = (state = true, action)=>{
    switch(action.type){
        case'TOGGLE' :return action.payload;
    }
    return state;
};