import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';


const ShowResult = (props) => {

    const { pizzaUnoData, pizzaDueData } = useContext(AppContext);

    return (<>
        <p></p>
        {pizzaUnoData.value.toFixed(2)}
        <p></p>
        {pizzaDueData.value.toFixed(2)}
    </>);
}

export default ShowResult;