import React from 'react';

import './AnimationSkip.sass';

const AnimationSkip = (props) => {

    return (
        <div className='animation_skip'>
            <button className='animation_skip__button'
                onClick={() => {
                    props.timeline.progress(1, false);
                    // props.timeline.currentLabel('slicer');
                }}>SKIP</button >
        </div>
    );
};

export default AnimationSkip;