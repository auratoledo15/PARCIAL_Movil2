import React, { useState } from 'react';

export const UseCounter = () => {
    const  [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {
        if(count + value >= 0){
        setCount(count+value);
        }else{
            alert("Opcion no valida");
        }
    }
    const nombre = (value: string) => {
        return  value;
    }
    
    return {
        //Properties
        count,

        //Methods
        increaseBy,

        //Methods
        nombre,
    }
}


export default UseCounter;