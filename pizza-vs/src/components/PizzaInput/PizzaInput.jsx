import React, { useContext, useEffect, useState } from 'react';

import { AppContext } from '../../AppContext';

import './PizzaInput.sass';

const PizzaInput = (props) => {

    const pizzaData = useContext(AppContext);

    // get data dependant on class
    const { getPizzaData, setPizzaData } = pizzaData[props.name];

    const [pizzaSize, setPizzaSize] = useState(getPizzaData.size);
    const [pizzaCount, setPizzaCount] = useState(getPizzaData.count);
    const [pizzaPrice, setPizzaPrice] = useState(getPizzaData.price);

    useEffect(() => {
        if (pizzaSize > 0 && pizzaCount > 0 && pizzaPrice > 0) {
            let surface = 3.14 * ((pizzaSize / 2) ** 2) * pizzaCount;
            let value = surface / pizzaPrice;
            setPizzaData({ size: pizzaSize, count: pizzaCount, price: pizzaPrice, surface: surface, value: value });
        }
    }, [pizzaPrice, pizzaCount, pizzaSize, setPizzaData]);

    const validationHandler = (e) => {
        const removeClass = !(e.target.value > 0) ? 'pizza_input__input--valid' : 'pizza_input__input--invalid';
        const validatesClass = e.target.value > 0 ? 'pizza_input__input--valid' : 'pizza_input__input--invalid';
        e.target.classList.remove(removeClass);
        e.target.classList.add(validatesClass);
    };

    return (
        <div className={`pizza_input pizza_input--${props.classer}`}>

            <form className='pizza_input__form' action=''>
                <input placeholder='DIAMETER' min='1' onBlur={validationHandler} className={`pizza_input__input pizza_input__input--${props.classer}`} type="number" onChange={({ target }) => { setPizzaSize(parseInt(target.value)) }} />
                <input placeholder='COUNT' min='1' onBlur={validationHandler} className={`pizza_input__input pizza_input__input--${props.classer}`} type="number" onChange={({ target }) => { setPizzaCount(parseInt(target.value)) }} />
                <input placeholder='PRICE' min='1' onBlur={validationHandler} className={`pizza_input__input pizza_input__input--${props.classer}`} type="number" onChange={({ target }) => { setPizzaPrice(parseInt(target.value)) }} />
            </form>

        </div>);
}

export default PizzaInput;