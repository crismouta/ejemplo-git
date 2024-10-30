
import {useState, useEffect} from "react";

const Counter = () => {
    // counter logica js
    //let number = 0;

    const [number, setNumber] = useState(5);

    const increment = () => {
        setNumber(number +1)
        console.log(number);
    }

    useEffect(()=> {
        console.log("se renderiza una vez cuando se monta");
    }, [])

    useEffect(()=>{
        console.log("se renderiza siempre, ojo no se usa nunca");
    })

    useEffect(()=> {
        console.log("se renderiza una vez, y cada vez que mi depencia se cambie de estado");
    }, [number])
    return(
        <>
            <h2>{number}</h2>
            <button onClick={increment}>Incrementar</button>
            <h2>{number}</h2>
            
        </>
    )
}

export default Counter;