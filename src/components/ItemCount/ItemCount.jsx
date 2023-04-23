import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)

    const agregarAlCarrito = ()=>{
        onAdd(contador, toast.success("Producto agregado al carrito",{
            position: toast.POSITION.BOTTOM_LEFT}));
    }

const sumar = () => contador<stock && setContador(contador+1)
const restar = () => contador>1 && setContador(contador-1)

    return (
        <div>
            <button className='btn btn-primary' onClick={() => restar()} >-</button>
            {contador}
            <button className='btn btn-primary' onClick={() => sumar()} >+</button>
            <button type='button' className='btn btn-primary mx-2' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;