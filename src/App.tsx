import React from "react";
import { ContadorRed } from "./Components/ContadorRed";
import { Counter } from "./Components/Counter";
import { Formulario } from "./Components/Formulario";
import { TimerPadre } from "./Components/TimerPadre";
import { Usuario } from './Components/Usuario';

function App() {
  return (
    <>
    <h1> react + typeScript </h1>
    <hr/>
    <h2>useState</h2>
<Counter />

<Usuario/>

<h2> useEffect - useRef</h2>
<hr/>
<TimerPadre/>

<h2>useReducer</h2>
<hr/>
<ContadorRed />

<h2>customHooks</h2>
<hr/>
<Formulario />

<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
<hr/>
      </>
  );
}
  
export default App;
