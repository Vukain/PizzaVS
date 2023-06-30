import { useEffect } from 'react';
import { gsap } from 'gsap';

import { elemMapper } from '../utils/elemMapper';

export const useGsapIntroAnimation = (timeline) => {
  useEffect(() => {
    const elementsBroken = document.querySelector('.broken_plate');
    const elementsPlate = document.querySelector('.plate');
    const elementsPizza = document.querySelector('.pizza');
    const plateWithPizza = [elementsPlate, elementsPizza];

    const inputWrap = document.querySelector('.input_wrapper');
    const resultWrap = document.querySelector('.result_wrapper');
    const skipButton = document.querySelector('.animation_skip');
    const input = document.querySelector('.plate_input');
    const result = document.querySelector('.show_result');
    const result_simple = document.querySelector('.plate_input__result_simple');

    // get elements for pizza building animation
    const plateVisible = elementsPlate.getElementById('plate_svg__plate_full');
    const buildingBase = ['plate_full', 'build_dough', 'build_sauce', 'build_cheese'];
    const [plateHidden, dough, sauce, cheese] = elemMapper(buildingBase, elementsPizza, 'pizzas_svg__', 'id');
    const buildingIngreds = [
      '[id*="build_mozzarella"]',
      '[id*="build_prosciutto_a"], [id*="build_prosciutto_b"]',
      '[id*="build_tomato_small"]',
      '[id*="build_rucola_a"], [id*="build_rucola_b"], [id*="build_rucola_c"]',
      '[id*="build_black_olive_a"], [id*="build_black_olive_b"]',
    ];
    const [mozzarella, prosciuttos, tomatos, rucola, olives] = elemMapper(buildingIngreds, elementsPizza, '', 'query');
    const buildIngredients = [
      plateHidden,
      plateVisible,
      dough,
      sauce,
      cheese,
      prosciuttos,
      tomatos,
      rucola,
      olives,
      mozzarella,
    ];
    // get pizza types
    const pizzas = ['parma', 'formaggi', 'mare', 'pepperoni', 'hawaii', 'carbonara', 'empty_slicing'];
    const [parma, formaggi, mare, peppe, hawa, carbo, empty] = elemMapper(pizzas, elementsPizza, 'pizzas_svg__', 'id');
    const pizzaTypes = [formaggi, mare, peppe, hawa, carbo, empty];
    // get shards for plate breaking animation
    const shards = [
      'shard00',
      'shard01',
      'shard02',
      'shard03',
      'shard04',
      'shard05',
      'shard06',
      'shard07',
      'shard08',
      'shard09',
      'vs_shard00',
      'vs_shard01',
      'vs_shard02',
      'vs_shard03',
    ];
    const [
      shard00,
      shard01,
      shard02,
      shard03,
      shard04,
      shard05,
      shard06,
      shard07,
      shard08,
      shard09,
      vsShard00,
      vsShard01,
      vsShard02,
      vsShard03,
    ] = elemMapper(shards, elementsBroken, 'broken_svg__', 'id');

    // get broken plate captions
    const pizzaSign = elementsBroken.getElementById('broken_svg__pizza_sign');
    const vukainSign = elementsBroken.querySelectorAll('[id*="vuk_sign"]');
    const variantUno = elementsBroken.getElementById('broken_svg__variant_uno');
    const variantDue = elementsBroken.getElementById('broken_svg__variant_due');
    // make images not visible at start
    gsap.set(
      [
        buildIngredients,
        pizzaTypes,
        pizzaSign,
        input,
        result,
        result_simple,
        skipButton,
        variantUno,
        variantDue,
        vukainSign,
      ],
      { autoAlpha: 0 },
    );
    gsap.set('svg', { visibility: 'visible' });

    // building pizza animation
    timeline
      .fromTo(
        skipButton,
        { scale: 0.8 },
        { duration: 1, delay: 0.1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' },
      )
      .fromTo(plateVisible, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(dough, { scale: 0.8 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(sauce, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(cheese, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(mozzarella, { scale: 0.9 }, { duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' })
      .fromTo(
        prosciuttos,
        { scale: 1.3 },
        { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' },
      )
      .fromTo(
        rucola,
        { scale: 1.3 },
        { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' },
      )
      .fromTo(
        tomatos,
        { scale: 1.3 },
        { stagger: 0.1, duration: 1, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' },
      )
      .fromTo(
        olives,
        { scale: 1.3 },
        { stagger: 0.1, duration: 0.6, scale: 1, autoAlpha: 1, transform: 'rotateZ(0.1deg)' },
      );

    // pizza sliding animation
    if (window.matchMedia('(orientation: landscape)').matches) {
      timeline
        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '+=100vh',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '-=100vh',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '+=100vh',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '-=100vh',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '+=100vh',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '-=200vh', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '+=100vh', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          y: '-=100vh',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, y: '+=200vh', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, y: '-=100vh', transform: 'rotateZ(0deg)' })
        .to(resultWrap, { ease: 'expo.inOut', duration: 2, delay: 0.5, left: '100%' })
        .to(inputWrap, { ease: 'expo.inOut', duration: 2, delay: -2, x: '+=100vh' })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: 'bounce.out', duration: 1, scale: 1 });
    } else {
      // pizza sliding animation for portrait
      timeline
        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '+=100vw',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, parma], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '-=100vw',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, formaggi], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '+=100vw',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, carbo], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '-=100vw',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, mare], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '+=100vw',
          transform: 'rotateZ(80deg)',
        })
        .to([plateWithPizza, hawa], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '-=200vw', transform: 'rotateZ(-80deg)' })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '+=100vw', transform: 'rotateZ(0deg)' })

        .to(plateWithPizza, {
          ease: 'elastic.in(0.5, 0.3)',
          duration: 1.4,
          delay: 0.3,
          x: '-=100vw',
          transform: 'rotateZ(-80deg)',
        })
        .to([plateWithPizza, peppe], { duration: 0, autoAlpha: 0 })
        .to(plateWithPizza, { duration: 0, x: '+=200vw', transform: 'rotateZ(80deg)' })
        .to([plateWithPizza, empty], { duration: 0, autoAlpha: 1 })
        .to(plateWithPizza, { ease: 'elastic.out(0.8, 0.3)', duration: 1.7, x: '-=100vw', transform: 'rotateZ(0deg)' })

        .to(resultWrap, { ease: 'expo.inOut', duration: 2, delay: 0.5, top: '98%' })
        .to(inputWrap, { ease: 'expo.inOut', duration: 2, delay: -2, top: '32%' })
        .to(inputWrap, { duration: 1, delay: -0.6, scale: 1.2 })
        .to(inputWrap, { ease: 'bounce.out', duration: 1, x: '-=3.8vw', scale: 1.1 });
    }

    // plate breaking, making input elements visible, hiding skip button
    timeline
      .to(shard00, { duration: 0.3, delay: -0.3, xPercent: '3', yPercent: '15', rotation: 2 })
      .to(shard01, { duration: 0.3, delay: -0.3, xPercent: '40', yPercent: '90', rotation: 4 })
      .to(shard02, { duration: 0.3, delay: -0.3, xPercent: '24', yPercent: '30' })
      .to(shard03, { duration: 0.3, delay: -0.3, xPercent: '20', yPercent: '30' })
      .to(shard04, { duration: 0.3, delay: -0.3, xPercent: '4', yPercent: '12', rotation: -2 })
      .to(shard05, { duration: 0.3, delay: -0.3, xPercent: '19', yPercent: '18' })
      .to(shard06, { duration: 0.3, delay: -0.3, xPercent: '15' })
      .to(shard07, { duration: 0.3, delay: -0.3, xPercent: '-8', yPercent: '20' })
      .to(shard08, { duration: 0.3, delay: -0.3, xPercent: '46', yPercent: '-20' })
      .to(shard09, { duration: 0.3, delay: -0.3, xPercent: '40', yPercent: '-16' })
      .to(vsShard00, { duration: 0.3, delay: -0.3, xPercent: '62', yPercent: '-132' })
      .to(vsShard01, { duration: 0.3, delay: -0.3, xPercent: '18', yPercent: '-102' })
      .to(vsShard02, { duration: 0.3, delay: -0.3, xPercent: '46', yPercent: '-168' })
      .to(vsShard03, { duration: 0.3, delay: -0.3, xPercent: '-16', yPercent: '-160', rotation: -8 })
      .to([pizzaSign, vukainSign], { duration: 0.3, autoAlpha: 1 })
      .to([input, variantUno, variantDue], { duration: 0.3, delay: -0.3, autoAlpha: 1 })
      .to(skipButton, { autoAlpha: 0, delay: -0.3 });
  }, [timeline]);
};
