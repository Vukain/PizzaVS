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
            <PizzaInput name='uno' />
            <div className='plate_input__result_simple'>
                <p className='show_result__data'>{unoData.value === dueData.value ? "It's a tie!" : `Pick Variant ${unoData.value > dueData.value ? 'Uno' : 'Due'}!`}</p>
                <p className='show_result__data'>{unoData.value === dueData.value ? "Pick whatever you want!!!" :
                    `It has ${unoData.value > dueData.value ? (unoData.value * 100 / dueData.value).toFixed() - 100 : (dueData.value * 100 / unoData.value).toFixed() - 100}% more value!`}
                </p>
            </div>
            <PizzaInput name='due' />
        </div>);
}

export default PlateInput;