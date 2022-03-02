const  SAVE_Images = 'SAVE_Images';
const  SAVE_TEXT = 'SAVE_TEXT';
const  TOGGLE = 'TOGGLE';

export const saveImages = (data)=>{
    return {type:SAVE_Images, payload:data};
}

export const saveText = (data)=>{
    return {type:SAVE_TEXT, payload:data};
}

export const toggleText = (data)=>{
    return {type:TOGGLE, payload:data};
}