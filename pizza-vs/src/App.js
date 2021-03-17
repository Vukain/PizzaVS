import './App.sass';
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import AppProvider from './AppContext'
import Pizza from './components/Pizza/Pizza';
import Plate from './components/Plate/Plate';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';


function App() {


  const pizzaWrapper = useRef(null);
  const plateWrapper = useRef(null);

  useEffect(() => {
    const [elementsPizza] = pizzaWrapper.current.children;
    // const [elementsPlate] = plateWrapper.current.children;

    const dough = elementsPizza.getElementById('Dough');
    const pz = document.querySelector('.pizzer');
    const pl = document.querySelector('.plater');
    const sauce = elementsPizza.getElementById('Sauce');
    const cheese = elementsPizza.getElementById('Cheese');
    const ingredients = elementsPizza.getElementById('Ingredients');

    const prosciuttos = elementsPizza.querySelectorAll('[data-name= "Prosciutto A"], [data-name= "Prosciutto B"]');
    const tomatos = elementsPizza.querySelectorAll('[data-name= "Tomato Small"]');
    const rucola = elementsPizza.querySelectorAll('[data-name= "Rucola A"], [data-name= "Rucola B"], [data-name= "Rucola C"]');
    const olives = elementsPizza.querySelectorAll('[data-name= "Black Olive A"], [data-name= "Black Olive B"]');
    const parma = document.getElementById('Parma-e-rucola');


    gsap.set([dough, sauce, cheese, prosciuttos, tomatos, rucola, olives], { autoAlpha: 0 });
    gsap.set('svg', { visibility: "visible", transformOrigin: 'center' });

    const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });

    tl.fromTo(dough, { scale: 0.8, transformOrigin: 'center' }, { duration: 1, scale: 1, delay: 1, autoAlpha: 1 })
      .fromTo(sauce, { scale: 0.9, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(cheese, { scale: 0.9, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(prosciuttos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(rucola, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(tomatos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(olives, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1 })
      .fromTo(parma, { transformOrigin: 'center' }, { ease: "elastic.in(0.5, 0.3)", duration: 1.5, y: "+=100vh", transform: 'rotateZ(-80deg)' })
      .fromTo(parma, { transformOrigin: 'center' }, { ease: "elastic.out(0.8, 0.3)", duration: 2, delay: 2, y: "-=100vh", transform: 'rotateZ(0deg)' })
      .fromTo([pz, pl], { transformOrigin: 'center' }, { ease: "expo.inOut", duration: 2, delay: 1, x: "+=100vh" })
  }, []);

  return (
    <AppProvider>

      <div className="App" >

        {/* <PizzaInput name='uno' />
        <PizzaInput name='due' />
        <ShowResult /> */}
        {/* <Plate /> */}

        <div className='plater' >
          <Plate />
          <PizzaInput classer='unos' name='uno' />
          <PizzaInput classer='dos' name='due' />
        </div>

        <div className="pizzer" ref={pizzaWrapper}>
          <Pizza />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
