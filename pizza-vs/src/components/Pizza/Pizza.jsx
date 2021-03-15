import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './Pizza.sass';
import { ReactComponent as PizzaImg } from '../../media/pizza.svg';

const Pizza = () => {

    const wrapper = useRef(null);

    useEffect(() => {
        const [elements] = wrapper.current.children;

        const dough = elements.getElementById('Dough');
        const pz = document.querySelector('.rucola');
        const sauce = elements.getElementById('Sauce');
        const cheese = elements.getElementById('Cheese');
        const ingredients = elements.getElementById('Ingredients');

        const prosciuttos = elements.querySelectorAll('[data-name= "Prosciutto A"], [data-name= "Prosciutto B"]');
        const tomatos = elements.querySelectorAll('[data-name= "Tomato Small"]');
        const rucola = elements.querySelectorAll('[data-name= "Rucola A"], [data-name= "Rucola B"], [data-name= "Rucola C"]');
        const olives = elements.querySelectorAll('[data-name= "Black Olive A"], [data-name= "Black Olive B"]');

        gsap.set([dough, sauce, cheese, prosciuttos, tomatos, rucola, olives], { autoAlpha: 0 });

        const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } });

        tl.fromTo(dough, { scale: 0.8, transformOrigin: 'center' }, { duration: 1, scale: 1, delay: 1, autoAlpha: 1 })
            .fromTo(sauce, { scale: 0.9, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
            .fromTo(cheese, { scale: 0.9, transformOrigin: 'center' }, { duration: 1, scale: 1, autoAlpha: 1 })
            .fromTo(prosciuttos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
            .fromTo(rucola, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
            .fromTo(tomatos, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1 })
            .fromTo(olives, { scale: 1.3, transformOrigin: 'center' }, { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1 })
            .fromTo(elements, {}, { ease: "elastic.out(0.5, 0.4)", duration: 2, y: "+=100vh" })
            .fromTo(elements, {}, { ease: "elastic.out(0.5, 0.4)", duration: 2, y: "-=100vh" })

    }, []);

    return (
        <div ref={wrapper} className='rucola'>
            <PizzaImg />
        </div>
    );
}

export default Pizza;