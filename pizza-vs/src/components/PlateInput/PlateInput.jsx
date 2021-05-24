import React, { useContext } from 'react';

import { AppContext } from '../../AppContext';
import PizzaInput from '../PizzaInput/PizzaInput';

import './PlateInput.sass';

const PlateInput = (props) => {

    const pizzaData = useContext(AppContext);

    const { getPizzaData: unoData } = pizzaData['uno'];
    const { getPizzaData: dueData } = pizzaData['due'];

    return (
        <div className='plate_input'>
            <PizzaInput classer='unos' name='uno' />
            <div>
                <div className='plate_input__result_simple'>
                    <p className='show_result__data'>Pick Variant {unoData.value > dueData.value ? 'A' : 'B'}!</p>
                    <p className='show_result__data'>It has {unoData.value > dueData.value ? (unoData.value * 100 / dueData.value).toFixed() - 100 : (dueData.value * 100 / unoData.value).toFixed() - 100}% more value!</p>
                </div>
            </div>
            <PizzaInput classer='dos' name='due' />
        </div>);
}

export default PlateInput;