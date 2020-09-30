/* eslint-disable */
// import "breathecode-dom"; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let generateRandomSuit = () => {
    let cardsuit = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
    let suitnumber = Math.floor(Math.random() * cardsuit.length);
    return cardsuit[suitnumber];
  };
  let suit = generateRandomSuit();
  let suitArray = document.getElementsByClassName("suitdiv");
  for (let i = 0; i < suitArray.length; i++) {
    suitArray[i].innerHTML = suit;
    if (suit == "&hearts;" || suit == "&diams;") {
      suitArray[i].style.color = "red";
    }
  }
  let generateRandomFace = () => {
    let faceoptions = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let facenumber = Math.floor(Math.random() * faceoptions.length);
    return faceoptions[facenumber];
  };
  let face = generateRandomFace();
  document.querySelector(".facediv").innerHTML = face;
};
