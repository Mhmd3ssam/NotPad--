const  SAVE_IMAGES = 'SAVE_IMAGES';
const  SAVE_TEXT = 'SAVE_TEXT';
const  TOGGLE = 'TOGGLE';
const  EDITE_IMAGES= 'EDITE_Images';
export const saveImages = (data)=>{
    return {type:SAVE_IMAGES, payload:data};
}
export const editeImages = (data)=>{
    return {type:EDITE_IMAGES, payload:data};
}

export const saveText = (data)=>{
    return {type:SAVE_TEXT, payload:data};
}

export const toggleText = (data)=>{
    return {type:TOGGLE, payload:data};
}