import slickCarousel from './blocks/slick-carousel'
import sleepCalc from './blocks/sleep-calc'
import svgMap from './blocks/svg-map'
import WOW from 'wow.js'
import allAnimations from './blocks/allAnimations'

new WOW().init();

$(document).ready(function(){
  svgMap(),
  slickCarousel(),
  sleepCalc(),
  allAnimations()
});
