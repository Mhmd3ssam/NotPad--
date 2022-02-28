const initialState = [];

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case'SAVE_Images' :return [
            {
            ...action.payload,
          },...state];
    }
    return state;
};