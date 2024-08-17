import React, { useState } from 'react';
import Header from "./Header";
import CardPizza from "./CardPizza";
import 'bootstrap/dist/css/bootstrap.min.css';
import { pizzas } from '../utils/pizzas';

const Home = () => {
    const [listaPizzas, setListaPizzas] = useState(pizzas);
    const [carrito, setCarrito ] = useState([]);

    const agregarAlCarrito = (id) => {
        const pizzaAgregada = listaPizzas.find((pizza) => pizza.id === id)

        setCarrito([...carrito,pizzaAgregada]); //spread operator usar como base un arreglo y agregar elementos a el
   
    }

    return (
        <>
            <Header/>
            <div className="container mt-4">
                <div className="row">
                        {listaPizzas.map((pizza, index) => (
                            <div className="col-md-4 mb-4">
                                <CardPizza 
                                    key ={`pg-principal-${pizza.id}-${index}`} 
                                    pizza = {pizza}
                                    agregarAlCarrito={agregarAlCarrito}
                                    eliminarDelCarrito={eliminarDelCarrito}
                                />
                            </div>
                        ))}
                    
                </div>
            </div>
        </>
    );
};

export default Home;
