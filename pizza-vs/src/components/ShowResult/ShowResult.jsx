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
            <h2>Pizza 1</h2>
            <p>Surface: {unoData.surface.toFixed()}</p>
            <p>Value: {unoData.value.toFixed(2)}</p>

            <h2>Pizza 2</h2>
            <p>Surface: {dueData.surface.toFixed()}</p>
            <p>Value: {dueData.value.toFixed(2)}</p>
        </div>);
}

export default ShowResult;