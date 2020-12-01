import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';


const ShowResult = (props) => {

    const { calc, pizzaValue } = useContext(AppContext);

    console.log(props.name)

    return (<>
        <button onClick={() => { calc() }}>Dej</button>
        <h2>Wynik: {pizzaValue.toFixed()}</h2>
    </>);
}

export default ShowResult;