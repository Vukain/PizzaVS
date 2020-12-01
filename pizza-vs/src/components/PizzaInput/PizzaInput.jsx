import React, { useContext, useEffect, useState } from 'react';
import './PizzaInput.sass';
import { AppContext } from '../../AppContext';


const PizzaInput = (props) => {

    const { pizzaUnoData, setPizzaUnoData } = useContext(AppContext);
    const { pizzaDueData, setPizzaDueData } = useContext(AppContext);

    let pizzaData = {};

    if (props.name === 'uno') {
        pizzaData = pizzaUnoData;
    } else {
        pizzaData = pizzaDueData;
    }

    const [pizzaSize, setPizzaSize] = useState(pizzaData.size);
    const [pizzaCount, setPizzaCount] = useState(pizzaData.count);
    const [pizzaPrice, setPizzaPrice] = useState(pizzaData.price);

    const calculateValue = () => {
        // console.log(pizzaSize, pizzaCount, pizzaPrice)
        let surface = 3.14 * ((pizzaSize / 2) ** 2);
        let value = (pizzaCount * surface) / pizzaPrice;


        setPizzaUnoData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, value: value })
    }

    useEffect(() => {
        let surface = 3.14 * ((pizzaSize / 2) ** 2);
        let value = (pizzaCount * surface) / pizzaPrice;

        if (props.name === 'uno') {
            setPizzaUnoData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, value: value });
        } else {
            setPizzaDueData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, value: value });
        }

    }, [pizzaPrice, pizzaCount, pizzaSize])

    return (<>
        <h2>Pizza {props.name} </h2>
        <form action="">
            <label htmlFor="" onChange={({ target }) => { setPizzaSize(parseInt(target.value)) }}>Rozmiar: <input type="number" /></label>
            <label htmlFor="" onChange={({ target }) => { setPizzaCount(parseInt(target.value)) }}>Ilość: <input type="number" /></label>
            <label htmlFor="" onChange={({ target }) => { setPizzaPrice(parseInt(target.value)) }}>Łączna cena: <input type="number" /></label>
        </form>
        <button onClick={() => { console.log(pizzaData) }}>Loguj</button>
    </>);
}

export default PizzaInput;