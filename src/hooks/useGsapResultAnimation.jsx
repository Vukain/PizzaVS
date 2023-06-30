import { useEffect } from 'react';
import { elemMapper } from '../utils/elemMapper';

export const useGsapResultAnimation = (timeline) => {
  useEffect(() => {
    const elementsPlate = document.querySelector('.plate');
    const elementsPizza = document.querySelector('.pizza');
    const result = document.querySelector('.show_result');
    const result_simple = document.querySelector('.plate_input__result_simple');

    const slicer_rotate = window.matchMedia('(orientation: landscape)').matches ? -45 : 45;
    const [empty, sliceA, sliceB] = elemMapper(
      ['empty_slicing', 'slice_a', 'slice_b'],
      elementsPizza,
      'pizzas_svg__',
      'id',
    );
    const slicePartsA = new Array(...elementsPizza.querySelectorAll('[id*="slice_a_g"]')).reverse();
    const slicePartsB = new Array(...elementsPizza.querySelectorAll('[id*="slice_b_g"]')).reverse();
    // pizza eating animation
    timeline
      .paused(true)
      .fromTo(result_simple, { autoAlpha: 0, scale: 0.5 }, { autoAlpha: 1, delay: 0.2, duration: 0.4, scale: 1 })
      .to([elementsPlate, elementsPizza], { duration: 1, delay: 0.4, scale: 1.2, transform: 'rotateZ(0.1deg)' })
      .to(result, { autoAlpha: 1, duration: 0.1 })
      .to([elementsPlate, elementsPizza], {
        duration: 1,
        delay: 0.1,
        scale: 1.2,
        transform: `rotateZ(${slicer_rotate}deg)`,
      })
      .to(sliceA, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-15', yPercent: '-10' })
      .to(slicePartsA, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceA, { duration: 0, xPercent: '0', yPercent: '0' })
      .to(sliceB, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-10', yPercent: '-15' })
      .to(slicePartsB, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceB, { duration: 0, xPercent: '0', yPercent: '0' });
  }, [timeline]);
};
