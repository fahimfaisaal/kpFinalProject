const $ = el => document.querySelector(el)
const $$ = el => [...document.querySelectorAll(el)]

const splitText = (el, regEx, tag) => el.textContent.replace(regEx, tag)

const navToggle = $(".nav-toggle");
const nav = $(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

//* Header text animation with anime js

const colors = ["#2980b9", "#e74c3c", "#c0392b", "#95a5a6", "#d35400"]
$('.secondary__heading').innerHTML = splitText($('.secondary__heading'), /\S/g, `<span class='text'>$&</span>`);

(function () {
  anime({
    targets: '.secondary__heading .text',
    opacity: 0,
    background: colors,
    rotateY: [0, 90],
    delay: anime.stagger(80, {
      direction: 'reverse',
      easing: 'linear',
    }),
    easing: 'easeInExpo',
    duration: 3000,
    loop: true,
    direction: 'alternate'
  }).add({
    opacity: 1,
    background: transparent,
    delay: anime.stagger(10),
  });
})()