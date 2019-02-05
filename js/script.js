let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let card7;
let card8;
let card9;
let card10;
let card11;
let card12;
let card13;
let card14;
let card15;
let card16;
let card17;
let card18;
let card19;
let card20;
let card21;
let card22;
let card23;
let card24;
let card25;
let card26;
let card27;
let card28;
let card29;
let card30;
let card31;
let card32;
let card33;
let card34;
let card35;
let card36;
let card37;
let card38;
let card39;
let card40;
let card41;
let card42;
let card43;
let card44;
let card45;
let card46;
let card47;
let card48;
let card49;
let card50;

const cardImg1 = document.getElementById("card1");
const cardImg2 = document.getElementById("card2");
const cardImg3 = document.getElementById("card3");
const cardImg4 = document.getElementById("card4");
const cardImg5 = document.getElementById("card5");
const cardImg6 = document.getElementById("card6");
const cardImg7 = document.getElementById("card7");
const cardImg8 = document.getElementById("card8");
const cardImg9 = document.getElementById("card9");
const cardImg10 = document.getElementById("card10");
const cardImg11 = document.getElementById("card11");
const cardImg12 = document.getElementById("card12");
const cardImg13 = document.getElementById("card13");
const cardImg14 = document.getElementById("card14");
const cardImg15 = document.getElementById("card15");
const cardImg16 = document.getElementById("card16");
const cardImg17 = document.getElementById("card17");
const cardImg18 = document.getElementById("card18");
const cardImg19 = document.getElementById("card19");
const cardImg20 = document.getElementById("card20");
const cardImg21 = document.getElementById("card21");
const cardImg22 = document.getElementById("card22");
const cardImg23 = document.getElementById("card23");
const cardImg24 = document.getElementById("card24");
const cardImg25 = document.getElementById("card25");
const cardImg26 = document.getElementById("card26");
const cardImg27 = document.getElementById("card27");
const cardImg28 = document.getElementById("card28");
const cardImg29 = document.getElementById("card29");
const cardImg30 = document.getElementById("card30");
const cardImg31 = document.getElementById("card31");
const cardImg32 = document.getElementById("card32");
const cardImg33 = document.getElementById("card33");
const cardImg34 = document.getElementById("card34");
const cardImg35 = document.getElementById("card35");
const cardImg36 = document.getElementById("card36");
const cardImg37 = document.getElementById("card37");
const cardImg38 = document.getElementById("card38");
const cardImg39 = document.getElementById("card39");
const cardImg40 = document.getElementById("card40");
const cardImg41 = document.getElementById("card41");
const cardImg42 = document.getElementById("card42");
const cardImg43 = document.getElementById("card43");
const cardImg44 = document.getElementById("card44");
const cardImg45 = document.getElementById("card45");
const cardImg46 = document.getElementById("card46");
const cardImg47 = document.getElementById("card47");
const cardImg48 = document.getElementById("card48");
const cardImg49 = document.getElementById("card49");
const cardImg50 = document.getElementById("card50");

let numOfQuestionCards = 50;
let currentlyPlaying = true;

const appleIcon = "http://darius35150.github.io/memgamepics/images/apple1.png";
const butterflyIcon = "http://darius35150.github.io/memgamepics/images/butterfly1.png";
const carIcon = "http://darius35150.github.io/memgamepics/images/car1.png";
const catIcon = "http://darius35150.github.io/memgamepics/images/cat1.png";
const cloudIcon = "http://darius35150.github.io/memgamepics/images/cloud1.png";
const diceIcon = "http://darius35150.github.io/memgamepics/images/dice1.png";
const duckIcon = "http://darius35150.github.io/memgamepics/images/duck1.png";
const feetIcon = "http://darius35150.github.io/memgamepics/images/feet1.png";
const flakeIcon = "http://darius35150.github.io/memgamepics/images/flake1.png";
const flowerIcon = "http://darius35150.github.io/memgamepics/images/flower1.png";
const frogIcon = "http://darius35150.github.io/memgamepics/images/frog1.png";
const giftIcon = "http://darius35150.github.io/memgamepics/images/gift1.png";
const heartIcon = "http://darius35150.github.io/memgamepics/images/heart1.png";
const houseIcon = "http://darius35150.github.io/memgamepics/images/house1.png";
const ladybugIcon = "http://darius35150.github.io/memgamepics/images/ladybug1.png";
const leavesIcon = "http://darius35150.github.io/memgamepics/images/leaves1.png";
const mushroomIcon = "http://darius35150.github.io/memgamepics/images/mushroom1.png";
const owlIcon = "http://darius35150.github.io/memgamepics/images/owl1.png";
const pencilIcon = "http://darius35150.github.io/memgamepics/images/pencil1.png";
const rainbowIcon = "http://darius35150.github.io/memgamepics/images/rainbow1.png";
const roseIcon = "http://darius35150.github.io/memgamepics/images/rose1.png";
const sprinklerIcon = "http://darius35150.github.io/memgamepics/images/sprinkler1.png";
const sunIcon = "http://darius35150.github.io/memgamepics/images/sun1.png";
const treeIcon = "http://darius35150.github.io/memgamepics/images/tree1.png";
const umbrellaIcon = "http://darius35150.github.io/memgamepics/images/umbrella1.png";

const iconsArray = [
  appleIcon,
  butterflyIcon,
  carIcon,
  catIcon,
  cloudIcon,
  diceIcon,
  duckIcon,
  feetIcon,
  flakeIcon,
  flowerIcon,
  frogIcon,
  giftIcon,
  heartIcon,
  houseIcon,
  ladybugIcon,
  leavesIcon,
  mushroomIcon,
  owlIcon,
  pencilIcon,
  rainbowIcon,
  roseIcon,
  sprinklerIcon,
  sunIcon,
  treeIcon,
  umbrellaIcon
];
