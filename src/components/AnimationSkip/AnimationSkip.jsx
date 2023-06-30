import React from 'react';

import './AnimationSkip.sass';

export const AnimationSkip = ({ timeline }) => {
  return (
    <div className="animation_skip">
      <button
        className="animation_skip__button"
        onClick={() => {
          timeline.progress(1, false);
        }}
      >
        SKIP
      </button>
    </div>
  );
};
