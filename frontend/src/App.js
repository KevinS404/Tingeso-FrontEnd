import React from 'react'
import {CamposForm} from './components/CamposForm';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export function App() {
    const [Producto, setProducto] = useState(null)
    useEffect(()=> {
        /*
        try {
            let response = this.$axios.get('/Product');
            setProducto(response.data);
            console.log(Producto)
        } catch (error) {
            console.log('error', error);
        }
        */
       fetch('http://localhost:8080/Product').then((res)=>res.json()).then((json)=>{console.log(json)})
        
    },[])
    

    return (
        <div>
            
        </div>
    )
}
