import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';

const ShowResult = (props) => {

    const pizzaData = useContext(AppContext)

    const { getPizzaData: unoData } = pizzaData['uno'];
    const { getPizzaData: dueData } = pizzaData['due'];

    return (<>
        <h2>Pizza 1</h2>
        <p>Surface: {unoData.surface.toFixed()}</p>
        <p>Value: {unoData.value.toFixed(2)}</p>

        <h2>Pizza 2</h2>
        <p>Surface: {dueData.surface.toFixed()}</p>
        <p>Value: {dueData.value.toFixed(2)}</p>
    </>);
}

export default ShowResult;