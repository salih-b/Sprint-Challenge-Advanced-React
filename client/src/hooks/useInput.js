import React, {useState} from 'react';

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    // const handleChanges = updatedValue => {
    //   setValue(updatedValue);
    // };
    const handleChanges = e => {
        // e.target.name === 'email'
        // e.target.value === whatever was typed
        setValue(
           e.target.value
        );
      };
    
    return [value, setValue, handleChanges];
  };