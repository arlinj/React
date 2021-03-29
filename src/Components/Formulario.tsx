
import {ChangeEvent, useState} from 'react';

export const Formulario = () => {

    const [ormulario, setFormulario] = useState({
        email:"",
        nombre:""
    });

    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) => {
        const {name, value} =  target;
        
        setFormulario({
            ...formulario,
             [ name ]: value
        });
    }
    return(
        <form autoComplete="off">

            <div className="mb-3">
                <label className="form-lebel">Email:</label>
                <input type="email" 
                className="form-control"
                name="email"   
                onChange ={ handleChange}
                 />
                 </div>

                 <div className="mb-3">
                <label className="form-lebel">Nombre:</label>
                <input type="text" 
                className="form-control"
                name="nombre"  
                onChange ={ handleChange} 
                 />
                 </div>
                 <pre>{JSON.stringify(Formulario)}</pre>
        </form>
    )
}