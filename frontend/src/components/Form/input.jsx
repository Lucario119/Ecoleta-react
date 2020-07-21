import React, {useEffect, useRef} from 'react';
import { useField } from "@unform/core";

function Input({name, label, ...rest}) {
    const inputRef = useRef(null);
    const {fieldName, registerField} = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

  return(
     <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input id = {fieldName} ref={inputRef } {...rest} />
       
     </>
  )
}

export default Input;