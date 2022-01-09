import React from "react"

export const Fila = ({funcion,producto}) => {
    return (
        <>
        <tr>
            <td>{producto.nombre}</td>
            <td>{producto.codigo}</td>
            <td>{producto.fecha_vencimiento}</td>
            <td>{producto.id_categoria}</td>
            <td>{producto.precio}</td>
            <td>
                <button onClick={()=>funcion(producto.id)} >Eiminar</button>
            </td>
        </tr>
        </>
    )
}
