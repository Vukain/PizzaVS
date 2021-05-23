import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';

import './ShowResult.sass';

const ShowResult = (props) => {

    const pizzaData = useContext(AppContext)

    const { getPizzaData: unoData } = pizzaData['uno'];
    const { getPizzaData: dueData } = pizzaData['due'];

    useEffect(() => {
        if ((unoData.surface > 0 && unoData.value > 0) && (dueData.surface > 0 && dueData.value > 0)) {
            props.timeline.paused(false)
        }
    }, [unoData.surface, unoData.value, dueData.surface, dueData.value, props.timeline])

    return (
        <div className='show_result'>
            <h2 className='show_result__name'>Variant A</h2>
            <p className='show_result__data'>Surface: {unoData.surface.toFixed(2)} cm<sup>2</sup></p>
            <p className='show_result__data'>Value: {unoData.value.toFixed(2)} cm<sup>2</sup>/$</p>

            <h2 className='show_result__name'>Variant B</h2>
            <p className='show_result__data'>Surface: {dueData.surface.toFixed(2)} cm<sup>2</sup></p>
            <p className='show_result__data'>Value: {dueData.value.toFixed(2)} cm<sup>2</sup>/$</p>
        </div>);
}

export default ShowResult;