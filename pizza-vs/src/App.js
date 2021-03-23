import './App.sass';
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import AppProvider from './AppContext'
import Pizza from './components/Pizza/Pizza';
import Plate from './components/Plate/Plate';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

// import { ReactComponent as FormaImg } from './media/formaggi.svg';


function App() {


  const pizzaWrapper = useRef(null);
  const plateWrapper = useRef(null);
  const sliderWrapper = useRef(null);

  useEffect(() => {

    const [elementsPizza] = pizzaWrapper.current.children;
    const [elementsPlate] = plateWrapper.current.children;
    // const [elementsSlider] = sliderWrapper.current.children;

    const pl = document.querySelector('.plater');
    const pz = document.querySelector('.pizza');
    const pi = document.querySelector('.pizzer');

    const dough = elementsPizza.getElementById('pizzas_svg__buildDough');
    const sauce = elementsPizza.getElementById('pizzas_svg__buildSauce');
    const cheese = elementsPizza.getElementById('pizzas_svg__buildCheese');

    const parma = document.getElementById('pizzas_svg__parma');
    const formaggi = document.getElementById('pizzas_svg__formaggi');
    const mare = document.getElementById('pizzas_svg__mare');
    const peppe = document.getElementById('pizzas_svg__pepperoni');

    const prosciuttos = elementsPizza.querySelectorAll('#pizzas_svg__buildProsciuttoA, [data-name= "buildProsciuttoA"], #pizzas_svg__buildProsciuttoB, [data-name= "buildProsciuttoB"]');
    const tomatos = elementsPizza.querySelectorAll('#pizzas_svg__buildTomatoSmall, [data-name= "buildTomatoSmall"]');
    const rucola = elementsPizza.querySelectorAll('#pizzas_svg__buildRucolaA, [data-name= "buildRucolaA"], #pizzas_svg__buildRucolaB, [data-name= "buildRucolaB"], #pizzas_svg__buildRucolaC, [data-name= "buildRucolaC"]');
    const olives = elementsPizza.querySelectorAll('#pizzas_svg__buildBlackOliveA, [data-name= "buildBlackOliveA"], #pizzas_svg__buildBlackOliveB, [data-name= "buildBlackOliveB"] ');

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
    const shard10 = elementsPlate.getElementById('broken_svg__shard10');

    const vsShard00 = elementsPlate.getElementById('broken_svg__vsShard00');
    const vsShard01 = elementsPlate.getElementById('broken_svg__vsShard01');
    const vsShard02 = elementsPlate.getElementById('broken_svg__vsShard02');
    const vsShard03 = elementsPlate.getElementById('broken_svg__vsShard03');

    gsap.set([dough, sauce, cheese, prosciuttos, tomatos, rucola, olives, formaggi, mare, peppe], { autoAlpha: 0 });
    gsap.set('svg', { visibility: "visible", transformOrigin: 'center' });
    // gsap.set([formaggi], { autoAlpha: 1, y: "-=200vh" });

    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });

    tl
      .fromTo(dough, { scale: 0.8, transformOrigin: 'center' }, { duration: 1, scale: 1, delay: 1, autoAlpha: 1 })
      .fromTo(sauce, { scale: 0.9, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(cheese, { scale: 0.8, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(prosciuttos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(rucola, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(tomatos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(olives, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1 })
      
      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
      .to(parma, { autoAlpha: 0 })
      .to(formaggi, { autoAlpha: 1 })
      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
      .to(formaggi, { autoAlpha: 0 })
      .to(mare, { autoAlpha: 1 })
      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
      .to(mare, { autoAlpha: 0 })
      .to(peppe, { autoAlpha: 1 })
      .fromTo(pz, { transformOrigin: 'center' }, { ease: "elastic.out(0.8, 0.3)", duration: 1.8, delay: 0.2, y: "-=100vh", transform: 'rotateZ(0deg)' })

      .fromTo([pi, pl], { transformOrigin: 'center' }, { ease: "expo.inOut", duration: 2, delay: 1, x: "+=100vh" })
      .to([pl], { duration: 1, delay: -0.6, scale: 1.2 })
      .to([pl], { ease: "bounce.out", duration: 1, scale: 1 })
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


  }, []);

  return (
    <AppProvider>

      <div className="App" >

        {/* <PizzaInput name='uno' />
        <PizzaInput name='due' />
        <ShowResult /> */}
        {/* <Plate /> */}

        <div className='plater' ref={plateWrapper}>
          <Plate />
          <PizzaInput classer='unos' name='uno' />
          <PizzaInput classer='dos' name='due' />
        </div>

        <div className="pizzer" ref={pizzaWrapper}>
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
