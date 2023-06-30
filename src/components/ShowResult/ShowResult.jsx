import React, { useContext, useEffect } from 'react';

import { AppContext } from '../../AppContext';

import './ShowResult.sass';

export const ShowResult = ({ timeline }) => {
  const pizzaData = useContext(AppContext);

  const { getPizzaData: unoData } = pizzaData['uno'];
  const { getPizzaData: dueData } = pizzaData['due'];

  useEffect(() => {
    if (unoData.surface > 0 && unoData.value > 0 && dueData.surface > 0 && dueData.value > 0) {
      timeline.paused(false);
    }
  }, [unoData.surface, unoData.value, dueData.surface, dueData.value, timeline]);

  return (
    <div className="show_result show_result--raw_data">
      <h2 className="show_result__name">Variant Uno</h2>
      <p className="show_result__data">
        Surface: {unoData.surface.toFixed(2)} cm<sup>2</sup>
      </p>
      <p className="show_result__data">
        Value: {unoData.value.toFixed(2)} cm<sup>2</sup>/$
      </p>

      <h2 className="show_result__name">Variant Due</h2>
      <p className="show_result__data">
        Surface: {dueData.surface.toFixed(2)} cm<sup>2</sup>
      </p>
      <p className="show_result__data">
        Value: {dueData.value.toFixed(2)} cm<sup>2</sup>/$
      </p>
    </div>
  );
};
