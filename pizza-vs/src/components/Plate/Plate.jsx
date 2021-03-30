import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './Plate.sass';

import PizzaInput from '../PizzaInput/PizzaInput.jsx';
import { BrokenImg } from '../../media';

const Plate = () => {

    return (
        <BrokenImg className='plate' />
    );
}

export default Plate;