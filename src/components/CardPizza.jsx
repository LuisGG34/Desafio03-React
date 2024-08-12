import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faCartShopping,faPizzaSlice } from '@fortawesome/free-solid-svg-icons';

const CardPizza = ({ name, price, img, ingredientes }) => {
    return (
        <>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <h5 className="fs-6 fw-light">Ingredientes:</h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><FontAwesomeIcon icon={faPizzaSlice}/> {ingredientes.join(', ')}</li>
                <li className="list-group-item fs-4">Precio: ${price}</li>
            </ul>
            <div className='grid gap-3 justify-content-around'>
            <button className="btn btn-secondary">
                <FontAwesomeIcon icon={faEye} />
                Ver Mas
                </button>
            <button className="btn btn-dark">
                <FontAwesomeIcon icon={faCartShopping} />
                Añadir
                </button>
            </div>
            
        </div>
        </>
    );
};

export default CardPizza;

