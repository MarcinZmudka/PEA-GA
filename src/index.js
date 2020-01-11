import Solution from "./Solution";
import Selector from "./Selector";
import Population from "./Population";
import importer from "./importer";
import Counter from "./Counter";
import Crossover from "./Crossover";

// import menu from "./menu";
// import importer from "./importer";
// import Timer from "./timer";
// menu();
const nodes = importer("tsp_6_2");

const solutionOne = new Solution();
solutionOne.generateRandomPath(nodes);

const solutionTwo = new Solution();
solutionTwo.generateRandomPath(nodes);
const crossover = new Crossover();
crossover.cross(solutionOne, solutionTwo);