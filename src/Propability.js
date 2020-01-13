class Propability {
  constructor(mutation, crossover) {
    this.mutation = mutation;
    this.crossover = crossover;
  }
  findPairs(population) {
    const arrayOfChoosenSolutions = [];
    population.map((item, index) => {
      if (this.chooseIt(this.crossover)) {
        arrayOfChoosenSolutions.push(item);
        population.splice(index, 1);
      }
    });
    if (arrayOfChoosenSolutions.length % 2 === 1) {
      const item = arrayOfChoosenSolutions.pop();
      population.push(item);
    }
    return [arrayOfChoosenSolutions, population];
  }
  chooseIt(propability) {
    return  Math.random() <= propability; 
  }
  makeCrossover(oldPopulation, crossover) {
    const [arrayOfChoosenSolutions, population] = this.findPairs(oldPopulation);
    const arrayOfCrossedSolution = [];
    for (let i = 0; i < arrayOfChoosenSolutions.length - 1; i += 2) {

      arrayOfCrossedSolution.push(
        crossover.cross(
          arrayOfChoosenSolutions[i],
          arrayOfChoosenSolutions[i + 1]
        )
      );
    }
    arrayOfCrossedSolution.flat();
    population.push(arrayOfCrossedSolution);
    population.flat(2);
}
  makeMutation(population, mutation){
      population.map(item => {
          if(this.chooseIt(this.mutation)){
              mutation.mutate(item);
          }
      })
  }
}
export default Propability;