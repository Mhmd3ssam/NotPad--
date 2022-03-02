const  SAVE_Images = 'SAVE_Images';
const  SAVE_TEXT = 'SAVE_TEXT';

export const saveImages = (data)=>{
    return {type:SAVE_Images, payload:data};
}

export const saveText = (data)=>{
    return {type:SAVE_TEXT, payload:data};
}