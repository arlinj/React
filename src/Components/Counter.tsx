import { useState } from "react"

export const Counter = () => {
          const [Counter, setCounter] = useState(0);
          const incrementar = ( numero: number = 1 ):void => {
              setCounter( Counter + numero);
             
          }

    return (
        <div className="nt-5">
            <h3>Counter:useState</h3>
            <span>valor: {Counter} </span>
            <br/>
            <button

            onClick={ () => incrementar() }
             className="btn btn-outline-primary mt-2">
                +1
                </button>

                <button

            onClick={ () => incrementar(2) }
             className="btn btn-outline-primary mt-2">
                +2
                </button>

            </div>
    )
}