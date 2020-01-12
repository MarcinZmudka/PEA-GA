import Solution from "./Solution";

class Crossover {
  constructor(propability) {
    this.props = propability;
    this.countIndexes(6);
  }
  countIndexes(size) {
    //wyznacza indeksy
    let indexOne = Math.floor(Math.random() * size);
    let indexTwo = Math.floor(Math.random() * size);
    if (indexOne == indexTwo) {
      this.countIndexes(size);
      return;
    }
    if (indexOne > indexTwo) {
      let x = indexTwo;
      indexTwo = indexOne;
      indexOne = x;
    }
    this.indexOne = indexOne;
    this.indexTwo = indexTwo;
  }
  getRangeFromSolution(solution) {
    // tworzy sekcej dopasowań
    const nodesOne = solution.getNodes();
    const range = nodesOne.filter((value, index) => { // nie zwraca zera
      if (this.indexTwo >= index && index >= this.indexOne){
          if(value === 0){
              return true;
          }
           return value;
        };
    });
    return range;
  }
  makeSwapArray(rangeOne, rangeTwo) {
    // tworzy tabele odwzorowań
    const swapArray = [];
    for (let i = 0; i < rangeOne.length; i++) {
      swapArray.push([rangeOne[i], rangeTwo[i]]);
    }
    this.swapArray = swapArray;
  }
  getRanges(solutionOne, solutionTwo) {
    //bierze sekcje odwzorowań z rozwiązań
    const rangeOne = this.getRangeFromSolution(solutionOne);
    const rangeTwo = this.getRangeFromSolution(solutionTwo);
    this.makeSwapArray(rangeOne, rangeTwo);
    return [rangeOne, rangeTwo];
  }
  swapRanges(solution, range) {
    // tworzy nowe Solution
    const nodes = solution.getNodes();
    let i = 0;
    const newNodes = nodes.map((value, index) => {
      if (index < this.indexOne) {
        if (range.includes(value)) {
          return this.swapIncompatibleCities(value, range);
        }
        return value;
      }
      if (index > this.indexTwo) {
        if (range.includes(value)) {
          return this.swapIncompatibleCities(value, range);
        }
        return value;
      }
      return range[i++];
    });
    const newSolution = new Solution();
    newSolution.setNodes(newNodes);
    return newSolution;
  }
  swapIncompatibleCities(city, range, swapArray = []) {
    //zamienia niepasujące miasta według tabeli odwzrowań
    if (swapArray.length == 0) swapArray = this.swapArray;
    let newCity = null;
    let indexOfArray = 0;
    // console.log("@console", swapArray);
    swapArray.map((array, index) => {
      if (array.includes(city)) {
        const indexOfCity = array.indexOf(city);
        indexOfArray = index;
        if (indexOfCity == 0) {
          newCity = array[1];
        } else {
          newCity = array[0];
        }
      }
    });
    if (range.includes(newCity)) {
      const newSwap = swapArray.filter((value, index) => index != indexOfArray);
      return this.swapIncompatibleCities(newCity, range, newSwap);
    }
    // console.log(city, newCity);
    return newCity;
  }
  cross(solutionOne, solutionTwo) {
      console.log(solutionOne.getNodes());
      console.log(solutionTwo.getNodes());
      console.log(this.indexOne, this.indexTwo);
    const [rangeOne, rangeTwo] = this.getRanges(solutionOne, solutionTwo);
    const newSolutionOne = this.swapRanges(solutionOne, rangeTwo);
    const newSolutionTwo = this.swapRanges(solutionTwo, rangeOne);
    console.log(newSolutionOne.getNodes(), newSolutionTwo.getNodes());
  }
}
export default Crossover;
