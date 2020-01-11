class Selector {
  constructor(sizeOfBest) {
    this.size = sizeOfBest;
  }
  chooseTheBestSolutions(population) {
    let newBest = [];
    population.map(solution => {
      if (newBest.length < this.size) {
        newBest = this.putIntoArray(newBest, solution);
      } else {
        newBest = this.putIntoFullArray(newBest, solution); // przetestować
      }
    });
    return newBest;
  }
  putIntoFullArray(array, item) {
    let index = array.length - 1;
    while (array[index].getValue() > item.getValue() && index > 0) {
      index--;
    }
    if (index == 0) {
      if (array[0].getValue() > item.getValue()) {
        array.pop();
        return [item, ...array];
      } else {
        const first = array.shift();
        array.pop();
        return [first, item, ...array];
      }
    }
    if (index == array.length - 1) {
      return array;
    }
    const newArray = [];
    for (let i = 0; i < index + 1; i++) {
      newArray.push(array[i]);
    }
    newArray.push(item);
    for (let i = index + 1; i < array.length - 1; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
  putIntoArray(array, item) {
    if (array.length == 0) return [item];
    let index = array.length - 1;
    while (array[index].getValue() > item.getValue() && index > 0) {
      index--;
    }
    if (index == 0) {
      if (array[0].getValue() > item.getValue()) return [item, ...array];
      else {
        const first = array.shift();
        return [first, item, ...array];
      }
    }
    if (index == array.length - 1) {
      array.push(item);
      return array;
    }
    const newArray = [];
    for (let i = 0; i < index + 1; i++) {
      newArray.push(array[i]);
    }
    newArray.push(item);
    for (let i = index + 1; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}
export default Selector;
