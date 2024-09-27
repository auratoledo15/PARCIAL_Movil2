import UseCounter from '../hooks/useCounter';

export const CounterWithHook = () => {
    const {count,increaseBy,nombre} = UseCounter();

    return (
        <>
        <h3 style = {{ color: count === 0 ? "violet" : "cyan"}}>Contador: <small>{ count }</small></h3>
        <div>
            <button onClick={()=>increaseBy(+1)}> +1 </button>
            &nbsp;
            <button onClick={()=>increaseBy(-1)}> -1 </button>
            <div>
                {count === 0 && <p> No hay opciones disponibles</p>}
            </div>
            <h4>Mi nombre es: {nombre('Aura')}</h4>
        </div>
        </>
    )
}