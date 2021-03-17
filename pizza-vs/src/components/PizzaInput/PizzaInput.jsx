import React, { useContext, useEffect, useState } from 'react';

import './PizzaInput.sass';
import { AppContext } from '../../AppContext';

const PizzaInput = (props) => {

    const pizzaData = useContext(AppContext)
    const { getPizzaData, setPizzaData } = pizzaData[props.name];

    const [pizzaSize, setPizzaSize] = useState(getPizzaData.size);
    const [pizzaCount, setPizzaCount] = useState(getPizzaData.count);
    const [pizzaPrice, setPizzaPrice] = useState(getPizzaData.price);

    useEffect(() => {
        let surface = 3.14 * ((pizzaSize / 2) ** 2) * pizzaCount;
        let value = surface / pizzaPrice;

        setPizzaData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, value: value });
    }
        , [pizzaPrice, pizzaCount, pizzaSize])

    return (
        <div className={props.classer}>
            <h2>PIZZA {props.name.toUpperCase()} </h2>
            <form action="">
                <label htmlFor="">Rozmiar: <input type="number" onChange={({ target }) => { setPizzaSize(parseInt(target.value)) }} /></label>
                <label htmlFor="">Ilość: <input type="number" onChange={({ target }) => { setPizzaCount(parseInt(target.value)) }} value={pizzaCount} /></label>
                <label htmlFor="">Łączna cena: <input type="number" onChange={({ target }) => { setPizzaPrice(parseInt(target.value)) }} /></label>
            </form>
            {/* <button onClick={() => { console.log(pizzaData) }}>Loguj</button> */}
            <p>Wartośc: {getPizzaData.value.toFixed(2)}</p>
        </div>);
}

// const PizzaInput = (props) => {

//     const { pizzaUnoData, setPizzaUnoData } = useContext(AppContext);
//     const { pizzaDueData, setPizzaDueData } = useContext(AppContext);

//     let pizzaData = {};

//     if (props.name === 'uno') {
//         pizzaData = pizzaUnoData;
//     } else {
//         pizzaData = pizzaDueData;
//     }

//     const [pizzaSize, setPizzaSize] = useState(pizzaData.size);
//     const [pizzaCount, setPizzaCount] = useState(pizzaData.count);
//     const [pizzaPrice, setPizzaPrice] = useState(pizzaData.price);

//     useEffect(() => {
//         let surface = 3.14 * ((pizzaSize / 2) ** 2) * pizzaCount;
//         let value = surface / pizzaPrice;

//         if (props.name === 'uno') {
//             setPizzaUnoData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, surface: surface, value: value });
//         } else {
//             setPizzaDueData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, surface: surface, value: value });
//         }

//     }, [pizzaPrice, pizzaCount, pizzaSize])

//     return (<>
//         <h2>Pizza {props.name} </h2>
//         <form action="">
//             <label htmlFor="">Rozmiar: <input type="number" onChange={({ target }) => { setPizzaSize(parseInt(target.value)) }} /></label>
//             <label htmlFor="">Ilość: <input type="number" onChange={({ target }) => { setPizzaCount(parseInt(target.value)) }} value={pizzaCount} /></label>
//             <label htmlFor="">Łączna cena: <input type="number" onChange={({ target }) => { setPizzaPrice(parseInt(target.value)) }} /></label>
//         </form>
//         <button onClick={() => { console.log(pizzaData) }}>Loguj</button>
//     </>);
// }

export default PizzaInput;