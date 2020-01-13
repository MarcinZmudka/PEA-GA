import Solution from "./Solution";
import Selector from "./Selector";
import Population from "./Population";
import importer from "./importer";
import Counter from "./Counter";
import Crossover from "./Crossover";
import Mutation from "./MutationInsertion";
import Propability from "./Propability";
// import menu from "./menu";
// import importer from "./importer";
// import Timer from "./timer";
// menu();
const nodes = importer("br17");
const crossover = new Crossover(nodes.length);
const counter = new Counter(nodes);
const population = new Population(10000, nodes);
const mutation = new Mutation();
const probability = new Propability(0.2, 0.8);

let routes = population.makeRandomPopulation();
routes.map(item => counter.count_value_of_solution(item));
for(let i =1; i<1000; i++){
    if(Math.floor(routes.length) < 4)
        break;
    const selector = new Selector();
    routes = selector.chooseTheBestSolutions(routes, Math.floor(routes.length*0.5));
    probability.makeCrossover(routes, crossover);
    routes  = routes.flat(2);
    probability.makeMutation(routes, mutation);
    routes.map((item,index) => {
        counter.count_value_of_solution(item)
    });
}
 console.log(routes);