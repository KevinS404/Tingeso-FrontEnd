import React from 'react'
import {CamposForm} from './CamposForm';
import { useEffect } from 'react';
import { useState } from 'react';
import { Lista } from './Lista';
import axios from 'axios';


export const Principal = () => {
    const [producto, setProducto] = useState([])
    useEffect(()=> {
       //fetch('http://localhost:8080/Product').then((res)=>res.json()).then((json)=>{setProducto(json)})
       try {
        axios.get('http://162.243.163.225:8083/Product').then(res => {
            setProducto(res.data);
            console.log(res.data);
          })
    } catch (error) {
        console.log('error', error);
    }

        
    },[])
    
    let funcionAgregar = (product) =>{
        console.log(product);
        if(product.nombre === ""){
            alert("Falta el nombre del producto");
            
            return 0;
        }
        
        if(product.codigo === ""){
            alert("Falta el codigo del producto");
           
            return 0;
        }
        if(product.fechaVencimiento === ""){
            alert("Indicar fecha de vencimiento");
            
            return 0;
        }
        if(product.categoria === ""){
            alert("Indicar categoria");
            
            return 0;
        }
        if(product.precio === "" || product.precio <=0){
            alert("Error al indicar precio");

            return 0;
        }
        try {
            axios.post('http://162.243.163.225:8083/newProduct',product).then(res => {
                setProducto([...producto,res.data])
                console.log(producto);
              })
        } catch (error) {
            console.log('error', error);
        }
        
    }

    const funcionEliminar = (id) =>{
        
        try {
            axios.delete(`http://162.243.163.225:8083/Product/delete/${id}`).then(res => {
                let nuevos = producto.filter((product)=>product.id !== id);
                setProducto(nuevos)
                console.log(producto);
              })
        } catch (error) {
            console.log('error', error);
        }
    }
    return (
        <>
        <CamposForm funcionAgregar = {funcionAgregar}/>
          {producto.length === 0 ? <h2>NO HAY DATOS</h2>:<Lista funcionEliminar = {funcionEliminar} datos= {producto}/>}
        </>
    )
}

