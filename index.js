// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/*{
MODE PLUS RAPIDE
  Il faut passer le plus de tests, le plus rapidement possible.

  Objectif

  You are given a number N which defines the number of Arrays and a number L which defines the length of these Arrays, return N arrays of length L, filled from 1 to N*L.

  Entrée

  Line 1: An integer L for the length of each array
  Line 2: An integer N for the number of arrays

  Sortie

  N lines: An array of length L

  Contraintes

  Exemple

  Entrée

  2
  4
  Sortie

  [1,2]
  [3,4]
  [5,6]
  [7,8]
  ========================
  Entrée

  9
  2

  Sortie

  [1,2,3,4,5,6,7,8,9]
  [10,11,12,13,14,15,16,17,18]
  ========================
  Entrée

  10
  5

  Sortie

  [1,2,3,4,5,6,7,8,9,10]
  [11,12,13,14,15,16,17,18,19,20]
  [21,22,23,24,25,26,27,28,29,30]
  [31,32,33,34,35,36,37,38,39,40]
  [41,42,43,44,45,46,47,48,49,50]
  ========================
  Entrée

  5
  1

  Sortie

  [1,2,3,4,5]
}*/

/*{
const L = 2;
  const N = 4;
//}*/
/*{
const L = 9;
  const N = 2;
//}*/
/*{
const L = 10;
  const N = 5;
//}*/
//*{
const L = 5;
const N = 1;
//}*/
let currentNum = 0;
for (let a = 0; a < N; a++) {
  const arr = [];
  for (let b = 0; b < L; b++) {
    currentNum++;
    arr.push(currentNum);
  }
  console.log(arr);
}
