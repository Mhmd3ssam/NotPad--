const  SAVE_Images = 'SAVE_Images';

export const saveImages = (data)=>{
    return {type:SAVE_Images, payload:data};
}