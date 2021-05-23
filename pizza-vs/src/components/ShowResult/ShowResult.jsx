import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';

import './ShowResult.sass';

const ShowResult = (props) => {

    const pizzaData = useContext(AppContext)

    const { getPizzaData: unoData } = pizzaData['uno'];
    const { getPizzaData: dueData } = pizzaData['due'];

    const [toggle, setToggle] = useState('compli');

    useEffect(() => {
        if ((unoData.surface > 0 && unoData.value > 0) && (dueData.surface > 0 && dueData.value > 0)) {
            props.timeline.paused(false)
        }
    }, [unoData.surface, unoData.value, dueData.surface, dueData.value, props.timeline]);

    const simpleAnswer = () => {
        return (
            <div className='test'>
                <p className='show_result__data'>Pick Variant {unoData.value > dueData.value ? 'A' : 'B'}!</p>
                <p className='show_result__data'>It has {unoData.value > dueData.value ? (unoData.value * 100 / dueData.value).toFixed() - 100 : (dueData.value * 100 / unoData.value).toFixed() - 100}% more value!</p>
            </div>
        )
    }

    const complicatedAnswer = () => {
        return (
            <div>
                <h2 className='show_result__name'>Variant A</h2>
                <p className='show_result__data'>Surface: {unoData.surface.toFixed(2)} cm<sup>2</sup></p>
                <p className='show_result__data'>Value: {unoData.value.toFixed(2)} cm<sup>2</sup>/$</p>

                <h2 className='show_result__name'>Variant B</h2>
                <p className='show_result__data'>Surface: {dueData.surface.toFixed(2)} cm<sup>2</sup></p>
                <p className='show_result__data'>Value: {dueData.value.toFixed(2)} cm<sup>2</sup>/$</p>
            </div>)
    }

    const onToggleHandler = () => {
        console.log('changing')
        if (toggle === 'simple') {
            setToggle('compli')
        } else {
            setToggle('simple')
        }
    }

    const answer = toggle === 'simple' ? simpleAnswer() : complicatedAnswer()

    return (
        <div className='show_result show_result--raw_data'>
            {answer}
            {/* <button className='show_result__toggle_button' onClick={onToggleHandler}>Toggle</button> */}
        </div>
    )
}

export default ShowResult;