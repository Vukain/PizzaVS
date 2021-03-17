import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';


const ShowResult = (props) => {

    const { pizzaUnoData, pizzaDueData } = useContext(AppContext);

    return (<>
        <h2>Pizza 1</h2>
        <p>Powierzchnia: {pizzaUnoData.surface.toFixed()}</p>
        <p>Wartość: {pizzaUnoData.value.toFixed(2)}</p>

        <h2>Pizza 2</h2>
        <p>Powierzchnia: {pizzaDueData.surface.toFixed()}</p>
        <p>Wartość: {pizzaDueData.value.toFixed(2)}</p>
    </>);
}

export default ShowResult;