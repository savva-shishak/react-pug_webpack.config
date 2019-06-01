import 'gsap'
import { TweenMax, TimelineMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";

import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

import $ from 'jquery'

$(document).on('mousemove', () => {

    let width = window.innerWidth / 2;
    let height = window.innerHeight / 2;

    // отдаление от мыши
    let x = width -  event.clientX;
    let y = height - event.clientY;

    // притяжение к мыши
    let x2 = event.clientX - width;
    let y2 = event.clientY - height;

    let box = new TweenMax('#box', .5, {
        x: x2 / 10,
        y: y2 / 10  
    })

    let box2 = new TweenMax('#box2', .5, {
        x: x / 5,
        y: y / 5  
    })
});