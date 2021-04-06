import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

import './App.sass';

import AppProvider from './AppContext'
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import Pizza from './components/Pizza/Pizza';
import Plate from './components/Plate/Plate';
import AnimationSkip from './components/AnimationSkip/AnimationSkip';

function App() {

  // const [skipped, setSkipped] = useState(false);

  const pizzaWrapper = useRef(null);
  const plateWrapper = useRef(null);
  // const sliderWrapper = useRef(null);
  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });

  useEffect(() => {

    // console.log(window.matchMedia('(orientation: landscape)'))

    const [elementsPizza] = pizzaWrapper.current.children;
    const [elementsPlate] = plateWrapper.current.children;
    // const [elementsSlider] = sliderWrapper.current.children;

    const plateWrap = document.querySelector('.plate_wrapper');
    const pizzaWrap = document.querySelector('.pizza_wrapper');
    const pizza = document.querySelector('.pizza');
    const skipper = document.querySelector('.animation_skip__button');
    // get elements for pizza building animation
    const dough = elementsPizza.getElementById('pizzas_svg__buildDough');
    const sauce = elementsPizza.getElementById('pizzas_svg__buildSauce');
    const cheese = elementsPizza.getElementById('pizzas_svg__buildCheese');
    const mozzarellas = elementsPizza.querySelectorAll('[id*="buildMozzarella"]');
    const prosciuttos = elementsPizza.querySelectorAll('[id*="buildProsciuttoA"], [id*="buildProsciuttoB"]');
    const tomatos = elementsPizza.querySelectorAll('[id*="buildTomatoSmall"]');
    const rucola = elementsPizza.querySelectorAll('[id*="buildRucolaA"], [id*="buildRucolaB"], [id*="buildRucolaC"]');
    const olives = elementsPizza.querySelectorAll('[id*="buildBlackOliveA"], [id*="buildBlackOliveB"]');

    // get pizza types
    const parma = elementsPizza.getElementById('pizzas_svg__parma');
    const formaggi = elementsPizza.getElementById('pizzas_svg__formaggi');
    const mare = elementsPizza.getElementById('pizzas_svg__mare');
    const peppe = elementsPizza.getElementById('pizzas_svg__pepperoni');
    const hawa = elementsPizza.getElementById('pizzas_svg__hawaii');
    const carbo = elementsPizza.getElementById('pizzas_svg__carbonara');

    // get shards for plate breaking animation
    const shard00 = elementsPlate.getElementById('broken_svg__shard00');
    const shard01 = elementsPlate.getElementById('broken_svg__shard01');
    const shard02 = elementsPlate.getElementById('broken_svg__shard02');
    const shard03 = elementsPlate.getElementById('broken_svg__shard03');
    const shard04 = elementsPlate.getElementById('broken_svg__shard04');
    const shard05 = elementsPlate.getElementById('broken_svg__shard05');
    const shard06 = elementsPlate.getElementById('broken_svg__shard06');
    const shard07 = elementsPlate.getElementById('broken_svg__shard07');
    const shard08 = elementsPlate.getElementById('broken_svg__shard08');
    const shard09 = elementsPlate.getElementById('broken_svg__shard09');
    // const shard10 = elementsPlate.getElementById('broken_svg__shard10');

    const vsShard00 = elementsPlate.getElementById('broken_svg__vsShard00');
    const vsShard01 = elementsPlate.getElementById('broken_svg__vsShard01');
    const vsShard02 = elementsPlate.getElementById('broken_svg__vsShard02');
    const vsShard03 = elementsPlate.getElementById('broken_svg__vsShard03');

    gsap.set([dough, sauce, cheese, prosciuttos, tomatos, rucola, olives, formaggi, mozzarellas, mare, peppe, hawa, carbo], { autoAlpha: 0, transformOrigin: 'center' });
    gsap.set([pizza, pizzaWrap, plateWrap], { transformOrigin: 'center' });
    gsap.set('svg', { visibility: "visible", transformOrigin: 'center' });
    // gsap.set([formaggi], { autoAlpha: 1, y: "-=200vh" });

    tl
      .fromTo(dough, { scale: 0.8 }, { duration: 1, scale: 1, delay: 1, autoAlpha: 1 })
      .fromTo(sauce, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(cheese, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(mozzarellas, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(prosciuttos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(rucola, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(tomatos, { scale: 1.3 }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(olives, { scale: 1.3 }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1 })


    if (window.matchMedia('(orientation: landscape)').matches) {
      tl
        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to(parma, { autoAlpha: 0 })
        .to(formaggi, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to(formaggi, { autoAlpha: 0 })
        .to(mare, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to(mare, { autoAlpha: 0 })
        .to(peppe, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to(peppe, { autoAlpha: 0 })
        .to(hawa, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
        .to(hawa, { autoAlpha: 0 })
        .to(carbo, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

        .fromTo([pizzaWrap, plateWrap], {}, { ease: "expo.inOut", duration: 2, delay: 1, x: "+=100vh" })
        .to(plateWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(plateWrap, { ease: "bounce.out", duration: 1, scale: 1 })
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
        .to(skipper, {autoAlpha: 0})
    } else {
      tl
        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to(parma, { autoAlpha: 0 })
        .to(formaggi, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to(formaggi, { autoAlpha: 0 })
        .to(mare, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to(mare, { autoAlpha: 0 })
        .to(peppe, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to(peppe, { autoAlpha: 0 })
        .to(hawa, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .fromTo(pizza, {}, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, x: "+=100vw", transform: 'rotateZ(80deg)' })
        .to(hawa, { autoAlpha: 0 })
        .to(carbo, { autoAlpha: 1 })
        .fromTo(pizza, {}, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, x: "-=100vw", transform: 'rotateZ(0deg)' })

        .fromTo([pizzaWrap, plateWrap], {}, { ease: "expo.inOut", duration: 2, delay: 1, y: "+=100vw" })
        .to(plateWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(plateWrap, { ease: "bounce.out", duration: 1, scale: 1 })
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
        .to(skipper, {autoAlpha: 0})
    }

  }, []);

  return (
    <AppProvider>

      <div className="App" >

        {/* {skipped ? null : <AnimationSkip className='animation_skip' timeline={tl} skipper={setSkipped} />} */}

      <AnimationSkip className='animation_skip' timeline={tl} />

        <div className='plate_wrapper' ref={plateWrapper}>
          <Plate />
          <PizzaInput classer='unos' name='uno' />
          <PizzaInput classer='dos' name='due' />
        </div>

        <div className="pizza_wrapper" ref={pizzaWrapper}>
          <Pizza />
        </div>

        {/* <div className="slider" ref={sliderWrapper}>
          <FormaImg />
        </div> */}

      </div>
    </AppProvider>
  );
}

export default App;
