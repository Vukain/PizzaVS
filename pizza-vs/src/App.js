import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './App.sass';

// import via ReactComponent got a problem with SVGO
import { BrokenImg } from './media';
import { PizzaImg } from './media';
import { PlateImg } from './media';

import AppProvider from './AppContext';
import AnimationSkip from './components/AnimationSkip/AnimationSkip';
import PlateInput from './components/PlateInput/PlateInput';
import ShowResult from './components/ShowResult/ShowResult';

function App() {

  const resultWrapper = useRef(null);
  const inputWrapper = useRef(null);

  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });
  const resultTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });

  const elemMapper = (elemArray, elems, prefix) => { 
    return (elemArray.map(el =>  elems.getElementById(`${prefix}${el}`)));
  };

  useEffect(() => {
    // get main gsap targets
    const [elementsPlate, elementsPizza] = resultWrapper.current.children;
    const [elementsBroken] = inputWrapper.current.children;
    const plateWithPizza = [elementsPlate, elementsPizza];
    // get main sections
    const inputWrap = document.querySelector('.input_wrapper');
    const resultWrap = document.querySelector('.result_wrapper');
    const skipButton = document.querySelector('.animation_skip');
    // get elements for pizza building animation
    const plateVisible = elementsPlate.getElementById('plate_svg__plate_full');
    const plateHidden = elementsPizza.getElementById('pizzas_svg__plate_full');
    const dough = elementsPizza.getElementById('pizzas_svg__build_dough');
    const sauce = elementsPizza.getElementById('pizzas_svg__build_sauce');
    const cheese = elementsPizza.getElementById('pizzas_svg__build_cheese');
    const mozzarella = elementsPizza.querySelectorAll('[id*="build_mozzarella"]');
    const prosciuttos = elementsPizza.querySelectorAll('[id*="build_prosciutto_a"], [id*="build_prosciutto_b"]');
    const tomatos = elementsPizza.querySelectorAll('[id*="build_tomato_small"]');
    const rucola = elementsPizza.querySelectorAll('[id*="build_rucola_a"], [id*="build_rucola_b"], [id*="build_rucola_c"]');
    const olives = elementsPizza.querySelectorAll('[id*="build_black_olive_a"], [id*="build_black_olive_b"]');
    const buildIngredients = [plateHidden, plateVisible, dough, sauce, cheese, prosciuttos, tomatos, rucola, olives, mozzarella];
    // get pizza types
    const pizzas = ['parma', 'formaggi', 'mare', 'pepperoni', 'hawaii', 'carbonara', 'empty_slicing', 'slice_a', 'slice_b'];
    const [parma, formaggi, mare, peppe, hawa, carbo, empty, sliceA, sliceB] = elemMapper(pizzas, elementsPizza, 'pizzas_svg__');
    const slicePartsA = new Array(...elementsPizza.querySelectorAll('[id*="slice_a_g"]')).reverse();
    const slicePartsB = new Array(...elementsPizza.querySelectorAll('[id*="slice_b_g"]')).reverse();
    const pizzaTypes = [formaggi, mare, peppe, hawa, carbo, empty];
    // get shards for plate breaking animation
    const shards = ['shard00', 'shard01', 'shard02', 'shard03', 'shard04', 'shard05', 'shard06', 'shard07', 'shard08', 'shard09', 'vs_shard00', 'vs_shard01','vs_shard02','vs_shard03'];
    const [shard00, shard01, shard02, shard03, shard04, shard05, shard06, shard07, shard08, shard09, vsShard00, vsShard01, vsShard02, vsShard03] = elemMapper(shards, elementsBroken, 'broken_svg__');
    // get broken plate captions
    const pizzaSign = elementsBroken.getElementById('broken_svg__pizza_sign');
    const vukainSign = elementsBroken.querySelectorAll('[id*="vuk_sign"]');
    const variantUno = elementsBroken.getElementById('broken_svg__variant_uno');
    const variantDue = elementsBroken.getElementById('broken_svg__variant_due');
    // get inout and results
    const input = document.querySelector('.plate_input');
    const result_simple = document.querySelector('.plate_input__result_simple');
    const result = document.querySelector('.show_result');
    // make images not visible at start
    gsap.set([buildIngredients, pizzaTypes, pizzaSign, input, result, result_simple, skipButton, variantUno, variantDue, vukainSign], { autoAlpha: 0 });
    gsap.set('svg', { visibility: 'visible' });

    let slicer_rotate = 0;

    tl
      // building pizza animation
      .fromTo(skipButton, { scale: 0.8 }, { duration: 1, delay: 0.1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(plateVisible, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(dough, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(sauce, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(cheese, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(mozzarella, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(prosciuttos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(rucola, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(tomatos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(olives, { scale: 1.3 }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })

    if (window.matchMedia('(orientation: landscape)').matches) {
      tl
        // pizza sliding animation for landscape
        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '+=100vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '-=100vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '+=100vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '-=100vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '+=100vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, y: '-=100vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })
        .to(resultWrap, { ease: 'expo.inOut', duration: 2, delay: 0.5, left: '100%' })
        .to(inputWrap, { ease: 'expo.inOut', duration: 2, delay: -2, x: '+=100vh' })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: 'bounce.out', duration: 1, scale: 1 })
        
      slicer_rotate = -45;
    } else {
      tl
        // pizza sliding animation for portrait
        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '+=100vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '-=100vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '+=100vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '-=100vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '+=100vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: 'elastic.in(0.5, 0.3)', duration: 1.4, delay: 0.3, x: '-=100vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(resultWrap, { ease: 'expo.inOut', duration: 2, delay: 0.5, top: '98%' })
        .to(inputWrap, { ease: 'expo.inOut', duration: 2, delay: -2, top: '32%' })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: 'bounce.out', duration: 1, x: '-=3.8vw', scale: 1.1})

      slicer_rotate = 45;
    };

    tl
      // plate breaking
      .to(shard00, { duration: 0.3, delay: -0.3, xPercent: '3', yPercent: '15', transform: 'rotateZ(2deg)' })
      .to(shard01, { duration: 0.3, delay: -0.3, xPercent: '40', yPercent: '90', transform: 'rotateZ(4deg)' })
      .to(shard02, { duration: 0.3, delay: -0.3, xPercent: '24', yPercent: '30' })
      .to(shard03, { duration: 0.3, delay: -0.3, xPercent: '20', yPercent: '30' })
      .to(shard04, { duration: 0.3, delay: -0.3, xPercent: '4', yPercent: '12', transform: 'rotateZ(-2deg)' })
      .to(shard05, { duration: 0.3, delay: -0.3, xPercent: '19', yPercent: '18' })
      .to(shard06, { duration: 0.3, delay: -0.3, xPercent: '15' })
      .to(shard07, { duration: 0.3, delay: -0.3, xPercent: '-8', yPercent: '20' })
      .to(shard08, { duration: 0.3, delay: -0.3, xPercent: '46', yPercent: '-20' })
      .to(shard09, { duration: 0.3, delay: -0.3, xPercent: '40', yPercent: '-16' })
      .to(vsShard00, { duration: 0.3, delay: -0.3, xPercent: '62', yPercent: '-132' })
      .to(vsShard01, { duration: 0.3, delay: -0.3, xPercent: '18', yPercent: '-102' })
      .to(vsShard02, { duration: 0.3, delay: -0.3, xPercent: '46', yPercent: '-168' })
      .to(vsShard03, { duration: 0.3, delay: -0.3, xPercent: '-16', yPercent: '-160', transform: 'rotateZ(-8deg)' })
      // making input elements visible
      .to([pizzaSign, vukainSign], { duration: 0.3, autoAlpha: 1 })
      .to([input, variantUno, variantDue], { duration: 0.3, delay: -0.3, autoAlpha: 1 })
      // hiding skip button
      .to(skipButton, { autoAlpha: 0, delay: -0.3 })

    resultTl
      // awaiting input
      .paused(true)
      // pizza eating animation
      .fromTo(result_simple, {autoAlpha: 0, scale: 0.5}, { autoAlpha: 1, delay: 0.2, duration: 0.4 , scale: 1 })
      .to(plateWithPizza, { duration: 1, delay: 0.4, scale: 1.2, transform: 'rotateZ(0.1deg)' })
      .to(result, { autoAlpha: 1, duration: 0.1 })
      .to(empty, { duration: 1, delay: 0.1, transform: `rotateZ(${slicer_rotate}deg)` })
      .to(sliceA, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-15', yPercent: '-10' })
      .to(slicePartsA, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceA, { duration: 0, xPercent: '0', yPercent: '0' })
      .to(sliceB, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-10', yPercent: '-15' })
      .to(slicePartsB, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceB, { duration: 0, xPercent: '0', yPercent: '0' })
  }, [resultTl, tl]);

  return (
    <AppProvider>
      <div className='App' >

        <AnimationSkip timeline={tl} />

        <div className='input_wrapper' ref={inputWrapper}>
          <BrokenImg className='broken_plate' alt='broken plate image'/>
          <PlateInput timeline={resultTl} />
        </div>

        <div className='result_wrapper' ref={resultWrapper}>
          <PlateImg className='plate' alt='plate image'/>
          <PizzaImg className='pizza' alt='pizza image'/>
          <ShowResult timeline={resultTl} />
        </div>

      </div>
    </AppProvider>
  );
}

export default App;
