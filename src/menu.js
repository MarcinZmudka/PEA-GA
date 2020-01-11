const readline = require("readline-sync");
import Timer from "./timer";
import importer from "./importer";
import Tabu_Search from "./tabu_seach/Tabu_Search";
import Solution from "./tabu_seach/Solution";
import Counter from "./Counter";
let nodes = null;
const timer = new Timer();
let cadention = 5;
let neighbers = 5;
let iteration = 1000;

function showMenu() {
  console.log("Wybierz jeden z podpunktow");
  console.log("0. Załaduj plik");
  console.log("1. Pokaż zaladowny plik");
  console.log("2. Podaj liczbę iteracji");
  console.log("3. Podaj kandecje");
  console.log("4. Podaj podaj liczbe najlepszych sasiadow");
  console.log("5. Start Tabu Search");
  console.log("6. Wyjdz z programu");
}

function choose(number) {
  switch (number) {
    case "0":
      importFunc();
      break;
    case "1":
      showNodes();
      break;
    case "2":
      getIteration();
      break;
    case "3":
      getCadention();
      break;
    case "4":
      getNeighebers();
      break;
    case "5":
      TabuSearchStart();
      break;
    case "6":
      return;
    default:
      null;
  }
  init();
}

function init() {
  showMenu();
  read("", choose);
}

function importFunc() {
  //funckja importująca wskazany plik
  try {
    read("podaj nazwę pliku\n", name => {
      nodes = importer(name);
    });
  } catch (err) {
    console.log(err.code);
  }
}

function read(text, callback) {
  //funckja czytajaca dane wpisane do użytkownika i wywołująca funckję podaną jako paramtr z danymi jako parametrem
  var feedback = readline.question(text);
  callback(feedback);
}
function showNodes() {
  console.log(nodes);
}
function getCadention() {
  read("Podaj kadencje listy tabu: ", cadentionTabu => (cadention = cadentionTabu));
}
function getIteration() {
  read("Podaj liczbe iteracji: ", number => (iteration = number));
}
function getNeighebers() {
  read("Podaj liczbe sasiadow: ", number => (neighbers = number));
}
function TabuSearchStart() {
  
}
function nodesNotNull() {
  //funckja sprawdzjąca czy plik z danymi zostal wczytany
  if (nodes == null) {
    console.log("Musisz zaimportować plik, by podjac dalsze kroki");
    return false;
  }
  return true;
}
export default init;
