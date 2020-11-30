import React, { useContext, useState } from 'react';
import '../sass/PizzaInput.sass';

const PizzaInput = () => {



    return (<>
        <h2>Pizza</h2>
        <form action="">
            <label htmlFor="">Cena: <input type="text" /></label>
            <label htmlFor="">Rozmiar: <input type="number" /></label>
            <label htmlFor="">Ilość: <input type="number" /></label>
        </form>
    </>);
}

export default PizzaInput;