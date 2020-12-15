import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';


const ShowResult = (props) => {

    const { pizzaUnoData, pizzaDueData } = useContext(AppContext);

    return (<>
        <p>Wartośc pizzy 1: </p>
        {pizzaUnoData.value.toFixed(2)}
        <p>Wartośc pizzy 2: </p>
        {pizzaDueData.value.toFixed(2)}
    </>);
}

export default ShowResult;