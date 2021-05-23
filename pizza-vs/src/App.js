import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './App.sass';

// import via ReactComponent got a problem with SVGO
import { BrokenImg } from './media';
import { PizzaImg } from './media';
import { PlateImg } from './media';

import AppProvider from './AppContext'
import AnimationSkip from './components/AnimationSkip/AnimationSkip';
import PlateInput from './components/PlateInput/PlateInput';
import ShowResult from './components/ShowResult/ShowResult';

function App() {

  const resultWrapper = useRef(null);
  const inputWrapper = useRef(null);

  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });
  const resultTl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', transformOrigin: 'center' } });

  useEffect(() => {

    const skipper = document.querySelector('.animation_skip__button');

    const [elementsPlate, elementsPizza] = resultWrapper.current.children;
    const [elementsBroken] = inputWrapper.current.children;
    const inputWrap = document.querySelector('.input_wrapper'); 
    const resultWrap = document.querySelector('.result_wrapper');
    const plateWithPizza = [elementsPlate, elementsPizza]

    // get elements for pizza building animation
    const plateVisible = elementsPlate.getElementById('plate_svg__plateFull');
    const plateHidden = elementsPizza.getElementById('pizzas_svg__plateFull');
    const dough = elementsPizza.getElementById('pizzas_svg__buildDough');
    const sauce = elementsPizza.getElementById('pizzas_svg__buildSauce');
    const cheese = elementsPizza.getElementById('pizzas_svg__buildCheese');
    const mozzarellas = elementsPizza.querySelectorAll('[id*="buildMozzarella"]');
    const prosciuttos = elementsPizza.querySelectorAll('[id*="buildProsciuttoA"], [id*="buildProsciuttoB"]');
    const tomatos = elementsPizza.querySelectorAll('[id*="buildTomatoSmall"]');
    const rucola = elementsPizza.querySelectorAll('[id*="buildRucolaA"], [id*="buildRucolaB"], [id*="buildRucolaC"]');
    const olives = elementsPizza.querySelectorAll('[id*="buildBlackOliveA"], [id*="buildBlackOliveB"]');
    const buildIngredients = [plateHidden, plateVisible, dough, sauce, cheese, prosciuttos, tomatos, rucola, olives, mozzarellas]

    const eaten = elementsPizza.getElementById('pizzas_svg__eaten');

    // get pizza types
    const parma = elementsPizza.getElementById('pizzas_svg__parma');
    const formaggi = elementsPizza.getElementById('pizzas_svg__formaggi');
    const mare = elementsPizza.getElementById('pizzas_svg__mare');
    const peppe = elementsPizza.getElementById('pizzas_svg__pepperoni');
    const hawa = elementsPizza.getElementById('pizzas_svg__hawaii');
    const carbo = elementsPizza.getElementById('pizzas_svg__carbonara');
    const empty = elementsPizza.getElementById('pizzas_svg__empty_slicing');
    const sliceA = elementsPizza.getElementById('pizzas_svg__slice_a');
    const sliceB = elementsPizza.getElementById('pizzas_svg__slice_b');
    const slicePartsA = new Array(...elementsPizza.querySelectorAll('[id*="slice_a_g"]')).reverse();
    const slicePartsB = new Array(...elementsPizza.querySelectorAll('[id*="slice_b_g"]')).reverse();;
    const pizzaTypes = [formaggi, mare, peppe, hawa, carbo, empty];

    // get shards for plate breaking animation
    const shard00 = elementsBroken.getElementById('broken_svg__shard00');
    const shard01 = elementsBroken.getElementById('broken_svg__shard01');
    const shard02 = elementsBroken.getElementById('broken_svg__shard02');
    const shard03 = elementsBroken.getElementById('broken_svg__shard03');
    const shard04 = elementsBroken.getElementById('broken_svg__shard04');
    const shard05 = elementsBroken.getElementById('broken_svg__shard05');
    const shard06 = elementsBroken.getElementById('broken_svg__shard06');
    const shard07 = elementsBroken.getElementById('broken_svg__shard07');
    const shard08 = elementsBroken.getElementById('broken_svg__shard08');
    const shard09 = elementsBroken.getElementById('broken_svg__shard09');
    // const shard10 = elementsBroken.getElementById('broken_svg__shard10');
    const vsShard00 = elementsBroken.getElementById('broken_svg__vsShard00');
    const vsShard01 = elementsBroken.getElementById('broken_svg__vsShard01');
    const vsShard02 = elementsBroken.getElementById('broken_svg__vsShard02');
    const vsShard03 = elementsBroken.getElementById('broken_svg__vsShard03');

    const sign = elementsBroken.getElementById('broken_svg__pizzaSign');
    const vuk = elementsBroken.querySelectorAll('[id*="vuk_sign"]');
    console.log(vuk)
    const variantUno = elementsBroken.getElementById('broken_svg__variant_uno');
    const variantDue = elementsBroken.getElementById('broken_svg__variant_due');

    const input = document.querySelector('.plate_input');
    const result = document.querySelector('.show_result');
    const result_simple = document.querySelector('.plate_input__result_simple');

    gsap.set([buildIngredients, pizzaTypes, sign, input, result, result_simple, skipper, eaten, variantUno, variantDue, vuk], { autoAlpha: 0 });
    gsap.set('svg', { visibility: "visible" });

    let slicer_rotate = 0;
    // let reset_rotate = 0;

    tl
      .fromTo(skipper, { scale: 0.8 }, { duration: 1, delay: 0.1, scale: 1, autoAlpha: 1 })
      .fromTo(plateVisible, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(dough, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(sauce, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(cheese, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(mozzarellas, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(prosciuttos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(rucola, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(tomatos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(olives, { scale: 1.3 }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1 })

    if (window.matchMedia('(orientation: landscape)').matches) {
      tl
        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "-=200vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "+=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "-=100vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "+=200vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "-=200vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "+=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "-=100vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "+=200vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "-=200vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "+=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "-=100vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "+=200vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to(resultWrap, { ease: "expo.inOut", duration: 2, delay: 1, left: "100%" })
        .to(inputWrap, { ease: "expo.inOut", duration: 2, delay: -2, x: "+=100vh" })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: "bounce.out", duration: 1, scale: 1 })
      slicer_rotate = -45;
      // reset_rotate = 120;
    } else {
      tl
        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "-=200vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "+=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "-=100vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "+=200vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "-=200vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "+=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "-=100vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "+=200vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "-=200vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "+=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "-=100vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "+=200vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })
        .to(resultWrap, { ease: "expo.inOut", duration: 2, delay: 1, top: "96%" })
        .to(inputWrap, { ease: "expo.inOut", duration: 2, delay: -2, top: "32%" })

        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: "bounce.out", duration: 1, scale: 1 })
      slicer_rotate = 45;
      // reset_rotate = -120;
    }

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

      .to([sign, vuk], { duration: 0.3, autoAlpha: 1 })
      .to([input, variantUno, variantDue], { duration: 0.3, delay: -0.3, autoAlpha: 1 })
      .to(skipper, { autoAlpha: 0, delay: -0.3 }, 'slicer')
      
    resultTl
      .paused(true)
      .to([result_simple], { autoAlpha: 1, duration: 0.1 })
      .to(plateWithPizza, { duration: 1, delay: 0.4, scale: 1.2 })
      .to([result], { autoAlpha: 1, duration: 0.1 })
      .to(empty, { duration: 1, delay: 0.1, transform: `rotateZ(${slicer_rotate}deg)` })
      .to(sliceA, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-15', yPercent: '-10' })
      .to(slicePartsA, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceA, { duration: 0, xPercent: '0', yPercent: '0' })
      .to(sliceB, { ease: 'Expo.easeOut', duration: 0.6, xPercent: '-10', yPercent: '-15' })
      .to(slicePartsB, { duration: 0.1, stagger: 0.4, delay: 0.2, autoAlpha: 0 })
      .to(sliceB, { duration: 0, xPercent: '0', yPercent: '0' })
    // .to(empty, { duration: 1, delay: 1, transform: `rotateZ(${reset_rotate}deg)` })

  }, []);
  const x = '<v/k>'

  return (
    <AppProvider>

      <div className="App" >

        {/* {skipped ? null : <AnimationSkip className='animation_skip' timeline={tl} skipper={setSkipped} />} */}

        <AnimationSkip className='animation_skip' timeline={tl} />

        <div className='input_wrapper' ref={inputWrapper}>
          <BrokenImg className='broken_plate' />
          <PlateInput timeline={resultTl} />
        </div>

        <div className="result_wrapper" ref={resultWrapper}>
          <PlateImg className='plate' />
          <PizzaImg className='pizza' />
          <ShowResult timeline={resultTl} />
        </div>
        
      </div>
    </AppProvider>
  );
}

export default App;
