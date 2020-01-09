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
  // if (!nodesNotNull()) {
  //   return;
  // }
  // const solution = new Solution();
  // solution.generate_random_path(nodes);
  // const counter = new Counter(nodes);
  // counter.count_value_of_solution(solution);
  // const tabu_search = new Tabu_Search(
  //   iteration,
  //   cadention,
  //   neighbers,
  //   nodes,
  //   solution
  // );
  // tabu_search.start();
  // console.log(`\nWartosc ściezki ${tabu_search.best_value}`);
  // console.log(`Sciezka: ${tabu_search.best_solution.get_nodes()}\n`); "tsp_10", "br17", "ftv33_1",, "ftv56_1", "ftv65_1" 
  const files = ["ftv65_1"];
      for (let fil = 0; fil < 1; fil++) {
        let summary= 0;
        let time = 0;
        const timer = new Timer();
        const nodes = importer(files[fil]);
        for (let i = 0; i < 5; i++) {
            timer.init();
          const solution = new Solution();
          solution.generate_random_path(nodes);
          const counter = new Counter(nodes);
          counter.count_value_of_solution(solution);

          const tabu_search = new Tabu_Search(iteration, cadention, neighbers, nodes, solution);
          tabu_search.start();
          summary += tabu_search.best_value;
          time += timer.submit();
        }
        console.log(`${iteration}, ${cadention}, ${neighbers}, ${files[fil]}, ${summary}, ${time}`);
      }
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
