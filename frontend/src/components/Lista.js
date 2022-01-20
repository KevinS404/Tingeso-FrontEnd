import React from 'react'
import { Fila } from './Fila';

export function Lista({funcionEliminar,datos}) {
    return (
        <div>
        <h3>Tabla de Productos (Enero 2022)</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Codigo</th>
              <th>Fecha Vencimiento</th>
              <th>Categoria</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {datos.length > 0 ? (
              datos.map((product) => (
                <Fila
                  key={product.id}
                  producto={product}
                  funcion ={funcionEliminar} 
                />
              ))
            ) : (
              <tr>
                <td colSpan="3">Sin datos</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
        
    );
}
