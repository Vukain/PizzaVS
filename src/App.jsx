import React from 'react';
import gsap from 'gsap';

import './App.sass';

// import via ReactComponent got a problem with SVGO
import { ReactComponent as BrokenImg } from './media/broken.svg';
import { ReactComponent as PizzaImg } from './media/pizzas.svg';
import { ReactComponent as PlateImg } from './media/plate.svg';

import { AppProvider } from './AppContext';
import { AnimationSkip } from './components/AnimationSkip/AnimationSkip';
import { PlateInput } from './components/PlateInput/PlateInput';
import { ShowResult } from './components/ShowResult/ShowResult';
import { useGsapIntroAnimation } from './hooks/useGsapIntroAnimation';
import { useGsapResultAnimation } from './hooks/useGsapResultAnimation';

gsap.config({
  force3D: false,
});

export const App = () => {
  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });
  const resultTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });

  useGsapIntroAnimation(tl);
  useGsapResultAnimation(resultTl);

  return (
    <AppProvider>
      <div className="App">
        <AnimationSkip timeline={tl} />

        <div className="input_wrapper">
          <BrokenImg className="broken_plate" alt="broken plate image" />
          <PlateInput timeline={resultTl} />
        </div>

        <div className="result_wrapper">
          <PlateImg className="plate" alt="plate image" />
          <PizzaImg className="pizza" alt="pizza image" />
          <ShowResult timeline={resultTl} />
        </div>
      </div>
    </AppProvider>
  );
};
