import React from 'react';

import PizzaInput from '../PizzaInput/PizzaInput';

import './PlateInput.sass';

const PlateInput = (props) => {

    return (
        <div className={`plate_input`}>
            <PizzaInput classer='unos' name='uno' />
            <PizzaInput classer='dos' name='due' />
        </div>);
}

export default PlateInput;