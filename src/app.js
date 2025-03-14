import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  const dominio = ['.com', '.es', '.io', '.net'];


  pronoun.forEach(el => adj.forEach(ad => noun.forEach(no => dominio.forEach(dom=> console.log(`${el}${ad}${no}${dom}`)))))


  
};



