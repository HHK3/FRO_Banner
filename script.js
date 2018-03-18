let wie = document.querySelector('.lb_wie');
let gaat = document.querySelector('.lb_gaat');
let er = document.querySelector('.lb_er');
let winnen = document.querySelector('.lb_winnen');
let ballon = document.querySelector('.lb_ballon');
let spin = document.querySelector('.lb_spin');
let laag1 = document.querySelector('.lb_laag1');
let mis = document.querySelector('.lb_mis');
let ronald = document.querySelector('.lb_ronald');
let vs = document.querySelector('.lb_vs');
let king = document.querySelector('.lb_king');

const ani = () => {
  setTimeout( () => {wie.classList.remove('lb--uit')}, 400);
  setTimeout( () => {gaat.classList.remove('lb--uit')}, 800);
  setTimeout( () => {er.classList.remove('lb--uit')}, 1200);
  setTimeout( () => {winnen.classList.remove('lb--uit')}, 1600);
  setTimeout( () => {ballon.classList.remove('lb--uit')}, 1600);
  setTimeout( () => {spin.classList.add('lb--spin')}, 1600);

  //Naar laag 2
  setTimeout( () => {laag1.classList.add('lb--uit')}, 3000);
  setTimeout( () => {mis.classList.add('lb--uit')}, 4000);
  setTimeout( () => {ronald.classList.remove('lb--uit')}, 6000);
  setTimeout( () => {vs.classList.remove('lb--uit')}, 6500);
  setTimeout( () => {king.classList.remove('lb--uit')}, 7000);

  // Terug naar laag 1
  setTimeout( () => back(), 7000);
  setTimeout( () => {laag1.classList.remove('lb--uit')}, 9000);
  setTimeout( () => back2(), 12000);
}

const back = () => {
  wie.classList.add('lb--uit');
  gaat.classList.add('lb--uit');
  er.classList.add('lb--uit');
  winnen.classList.add('lb--uit');
  ballon.classList.add('lb--uit');
  spin.classList.remove('lb--spin');
}

const back2 = () => {
  mis.classList.remove('lb--uit');
  ronald.classList.add('lb--uit');
  vs.classList.add('lb--uit');
  king.classList.add('lb--uit');
}
ani();

setInterval( () => ani(), 9000);

//Banner linken
const goTo = () => window.open('https://www.youtube.com/watch?v=Ahw-ywLa5i4', '_blank');
document.querySelector('.lb').addEventListener('click', goTo);
