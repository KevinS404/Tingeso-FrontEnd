import React, {Fragment} from 'react'
import { useState } from 'react';

const formularioInicial = {
    "nombre":"",
    "codigo":"",
    "fechaVencimiento":"",
    "categoria":"",
    "precio":"",

}

export function CamposForm({funcionAgregar}) {
    
    const [formulario, setFormulario] = useState(formularioInicial)

    let Submit = (e) =>{
        e.preventDefault();
        funcionAgregar(formulario);
    
    };

    let Cambio = (e) =>{
        setFormulario({
            ...formulario,[e.target.name]:e.target.value,
        });
    };

    return (
        <>
          <div>
          <form onSubmit={Submit}>
            <input
                type="text"
                name="nombre"
                placeholder="Nombre del producto"
                onChange={Cambio}
                value={formulario.nombre}
                />
            <input
                type="text"
                name="codigo"
                placeholder="Codigo"
                onChange={Cambio}
                value={formulario.codigo}
            />
            <input
                type="date"
                name="fechaVencimiento"
                onChange={Cambio}
                value={formulario.fechaVencimiento}
            /> 
            <select name = "categoria" onChange={(e)=>Cambio(e)}>
                <option value = "Importado">Importado</option>
                <option value = "Nacional">Nacional</option>
            </select> 
            <input
                type="number"
                name="precio"
                placeholder="Precio"
                onChange={Cambio}
                value={formulario.precio}
            />
            <input type="submit" value="Enviar" />
      </form>
            </div> 
        </>
    )
}
