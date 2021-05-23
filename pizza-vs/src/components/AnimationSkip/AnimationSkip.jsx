import React from 'react';
import './AnimationSkip.sass';

const AnimationSkip = (props) => {

    return (
        <button
            className='animation_skip__button'
            onClick={
                () => {
                    // props.timeline.progress(1, false)
                    props.timeline.currentLabel('slicer')
                    // props.skipper(true)

                }
            }> SKIP</button >
    );
}

export default AnimationSkip;