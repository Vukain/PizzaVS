import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './Pizza.sass';
import { ReactComponent as PizzaImg } from '../../media/pizza.svg';

const Pizza = () => {

    return (

        <PizzaImg className='pizza' />

    );
}

export default Pizza;