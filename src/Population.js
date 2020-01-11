import Solution from "./Solution";

class Population{
    constructor(sizeOfPopulation){
        this.size = sizeOfPopulation;
    }
    makeRandomPopulation(nodes){
        const population = [];
        for(let i =0; i < this.size; i++){
            const solution = new Solution();
            solution.generateRandomPath(nodes);
            population.push(solution);
        }
        return population;
    }
    makePopulationFrom(population){
        //how ought to that looks like ?
    }
}
export default Population;