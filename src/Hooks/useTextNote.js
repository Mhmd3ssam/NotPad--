import React, { useState } from 'react';

function useTextNote(initialValues) {
    const[values,setValues] = useState(initialValues);
  return [
    values,
    (e)=>{
        setValues({...values,[e.target.name]:e.target.value});
    }
  ]
}

export default useTextNote