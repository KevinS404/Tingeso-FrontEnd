import React from "react"

export const Fila = ({funcion,producto}) => {
    return (
        <>
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.codigo}</td>
            <td>{producto.fechaVencimiento}</td> 
            <td>{producto.categoria}</td>
            <td>{producto.precio}</td>
            <td>
                <button onClick={()=>funcion(producto.id)} >Eliminar</button>
            </td>
        </tr>
        </>
    )
}
