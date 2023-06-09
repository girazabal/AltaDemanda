import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../Context/CarritoContext';

const Cart = () => {

    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
        {carrito.length === 0 ?
        <>
            <h1 className='row g-0 mx-2 my-3'>Carrito vacío</h1>
            <Link to={'/'}><button className='btn btn-primary row g-0 mx-2'>Continuar comprando</button></Link>
        </>
        :
        <div className='container cartContainer'>

            {
                carrito.map(product =>
                <div className='card' key={product.id} style={{maxWidth:'465px'}}>
                    <div className="row g-0 mx-1">
                        <div className="col-md-4 mx-1">
                            <img src={`../img/${product.img}`} alt="Producto" className='img-fluid rounded-start mx-2' />
                        </div>
                    </div>
                    <div className="col-md-8 mx-1">
                        <div className="cardBody mx-1">
                            <h5 className='card-title mx-2'>{`${product.modelo} ${product.marca}`}</h5>
                            <p className='card-text mx-2'>Cantidad: {product.cant}</p>
                            <p className='card-text mx-2'>Precio unitario: ${new Intl.NumberFormat('de-De').format(product.precio)}</p>
                            <p className='card-text mx-2'>Precio total: ${new Intl.NumberFormat('de-De').format(product.precio * product.cant)}</p>
                        </div>
                        <button className='btn btn-danger mx-3'onClick={() => removeItem(product.id)}>Eliminar producto</button>
                    </div>
                </div>
            )}

            <div>
                <p>Resumen de la compra: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                <button className='btn btn-danger' onClick={emptyCart}>Vaciar carrito</button>
                <Link to={'/checkout'}><button className='btn btn-primary'>Finalizar compra</button></Link>
                <Link to={'/'}><button className='btn btn-primary'>Continuar comprando</button></Link>
            </div>
        </div>
        }
        </>
    );
}

export default Cart;
