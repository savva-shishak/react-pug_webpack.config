import ReactDom from 'react-dom';
import React from 'react';
import App from './React/App.jsx'
import 'gsap'
import { TweenMax, TimelineMax, TimelineLite, Power2, Elastic, CSSPlugin } from "gsap/TweenMax";


import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

import $ from 'jquery'


ReactDom.render(
  <App />,
  document.getElementById('app')
)
