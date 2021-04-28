import { useEffect, useRef } from 'react';
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
    const empty = elementsPizza.getElementById('pizzas_svg__empty');
    const pizzaTypes = [formaggi, mare, peppe, hawa, carbo, empty]

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

    const input = document.querySelector('.plate_input');
    const result = document.querySelector('.show_result');

    gsap.set([buildIngredients, pizzaTypes, sign, input, result, skipper, eaten], { autoAlpha: 0 });
    gsap.set('svg', { visibility: "visible" });

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
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "-=200vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "+=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "-=100vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "+=200vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "-=200vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "+=100vh", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, y: "-=100vh", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: "+=200vh", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .to([resultWrap, inputWrap], { ease: "expo.inOut", duration: 2, delay: 1, x: "+=100vh" })
        .to(plateWithPizza, { duration: 1, scale: 1.2 })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: "bounce.out", duration: 1, scale: 1 })
        .to(shard06, { duration: 0.3, delay: -0.3, x: '+=10vw' })
        .to(shard08, { duration: 0.3, delay: -0.3, x: '+=12vw', y: '-=4vw' })
        .to(shard09, { duration: 0.3, delay: -0.3, x: '+=6vw', y: '-=3vw' })
        .to(shard05, { duration: 0.3, delay: -0.3, x: '+=7vw', y: '+=2vw' })
        .to(shard04, { duration: 0.3, delay: -0.3, x: '+=2vw', y: '+=4vw', transform: 'rotateZ(-2deg)' })
        .to(shard02, { duration: 0.3, delay: -0.3, x: '+=14vw', y: '+=8vw' })
        .to(shard01, { duration: 0.3, delay: -0.3, x: '+=10vw', y: '+=10vw', transform: 'rotateZ(4deg)' })
        .to(shard03, { duration: 0.3, delay: -0.3, x: '+=10vw', y: '+=4vw' })
        .to(shard07, { duration: 0.3, delay: -0.3, x: '-=2vw', y: '+=2vw' })
        .to(shard00, { duration: 0.3, delay: -0.3, x: '+=2vw', y: '+=7vw', transform: 'rotateZ(2deg)' })
        .to(vsShard00, { duration: 0.3, delay: -0.3, x: '+=3vw', y: '-=6vw' })
        .to(vsShard01, { duration: 0.3, delay: -0.3, x: '+=1vw', y: '-=6vw' })
        .to(vsShard02, { duration: 0.3, delay: -0.3, x: '+=3vw', y: '-=8vw' })
        .to(vsShard03, { duration: 0.3, delay: -0.3, x: '-=1vw', y: '-=7vw' })

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
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "-=200vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "+=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "-=100vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "+=200vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "-=200vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "+=100vw", transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, { ease: "elastic.in(0.5, 0.3)", duration: 1.4, delay: 0.3, x: "-=100vw", transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: "+=200vw", transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: "elastic.out(0.8, 0.3)", duration: 1.7, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .to([resultWrap, inputWrap], { ease: "expo.inOut", duration: 2, delay: 1, y: "+=100vw" })
        .to(plateWithPizza, { duration: 1, scale: 1.2 })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: "bounce.out", duration: 1, scale: 1 })
        .to(shard06, { duration: 0.3, delay: -0.3, x: '+=30vw' })
        .to(shard08, { duration: 0.3, delay: -0.3, x: '+=36vw', y: '-=12vw' })
        .to(shard09, { duration: 0.3, delay: -0.3, x: '+=18vw', y: '-=9vw' })
        .to(shard05, { duration: 0.3, delay: -0.3, x: '+=21vw', y: '+=6vw' })
        .to(shard04, { duration: 0.3, delay: -0.3, x: '+=4vw', y: '+=18vw', transform: 'rotateZ(-2deg)' })
        .to(shard02, { duration: 0.3, delay: -0.3, x: '+=42vw', y: '+=28vw' })
        .to(shard01, { duration: 0.3, delay: -0.3, x: '+=27vw', y: '+=37vw', transform: 'rotateZ(4deg)' })
        .to(shard03, { duration: 0.3, delay: -0.3, x: '+=30vw', y: '+=16vw' })
        .to(shard07, { duration: 0.3, delay: -0.3, x: '-=6vw', y: '+=13vw' })
        .to(shard00, { duration: 0.3, delay: -0.3, x: '+=6vw', y: '+=26vw', transform: 'rotateZ(2deg)' })
        .to(vsShard00, { duration: 0.3, delay: -0.3, x: '+=12w', y: '-=34vw' })
        .to(vsShard01, { duration: 0.3, delay: -0.3, x: '+=3vw', y: '-=33vw' })
        .to(vsShard02, { duration: 0.3, delay: -0.3, x: '+=9vw', y: '-=46vw' })
        .to(vsShard03, { duration: 0.3, delay: -0.3, x: '-=3vw', y: '-=42vw' })
    }

    tl
      .to(sign, { duration: 0.3, autoAlpha: 1 })
      .to(input, { duration: 0.3, delay: -0.3, autoAlpha: 1 })
      // .to(eaten, {duration: 0.3, autoAlpha: 1})
      .to(skipper, { autoAlpha: 0, delay: -0.3 })
      .to(result, { autoAlpha: 1, delay: -0.3 })
      .to(empty, { autoAlpha: 0 })

  }, []);

  return (
    <AppProvider>

      <div className="App" >

        {/* {skipped ? null : <AnimationSkip className='animation_skip' timeline={tl} skipper={setSkipped} />} */}

        <AnimationSkip className='animation_skip' timeline={tl} />

        <div className='input_wrapper' ref={inputWrapper}>
          <BrokenImg className='broken_plate' />
          <PlateInput />
        </div>

        <div className="result_wrapper" ref={resultWrapper}>
          <PlateImg className='plate' />
          <PizzaImg className='pizza' />
          <ShowResult />
        </div>

      </div>
    </AppProvider>
  );
}

export default App;
