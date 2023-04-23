import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCarritoContext } from '../../Context/CarritoContext'
const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext();
    const onAdd = (contador) => {
        addItem(item, contador);
    }
    return (
        <div>
            <div className='row my-2'>
            <img src={`../img/${item.img}`} alt="" className='img-fluid rounded-start'/>
            </div>
            <div>
                <h5 className='card-title'>{item.nombre}</h5>
                    <p className='card-text'>Modelo: {item.modelo}</p>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
            </div>
            <div className="form-group row my-2">
                <label htmlFor="exampleSelect1" className="form-label mt-4">Talle</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
            </div>
            <div>
            <ItemCount inicial={1} stock={item.stock} onAdd={onAdd}/><br/>
            </div>
        </div>
    );
}

export default ItemDetail;