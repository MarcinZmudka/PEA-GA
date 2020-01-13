import Solution from "./Solution";

class Population{
    constructor(sizeOfPopulation, nodes){
        this.size = sizeOfPopulation;
        this.nodes = nodes;
    }
    makeRandomPopulation(){
        const population = [];
        for(let i =0; i < this.size; i++){
            const solution = new Solution();
            solution.generateRandomPath(this.nodes);
            population.push(solution);
        }
        return population;
    }
    makePopulationFrom(population){
        //how ought to that looks like ?
    }
}
export default Population;