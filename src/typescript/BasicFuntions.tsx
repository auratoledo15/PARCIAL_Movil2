const BasicFuntions = () => {

    /*const sumar = (a:number,b:number):string=>{
        // return (a+b).toString();
        return ${a+b};
    }
  
    return (
        <>
        <div>Funciones</div>
        <span>El resultado de sumar: {sumar(2,2) }</span>
        </>
    )*/
  
    const par_impar = (num:number):string=>{
        if (num % 2 == 0){
            return `El numero ${num} es Par`
        }else{
            return `El numero ${num} es Impar`
        }
    }
    return (
        <>
        <span>{par_impar(3)}</span>
        </>
    )
  }