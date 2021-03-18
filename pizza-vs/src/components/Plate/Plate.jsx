import React, { useEffect, useRef } from 'react';
import PizzaInput from '../PizzaInput/PizzaInput.jsx';
import gsap from 'gsap';

import './Plate.sass';
import { ReactComponent as PlateImg } from '../../media/broken.svg';

const Plate = () => {

    return (
        <PlateImg className='plate' />
    );
}

export default Plate;   