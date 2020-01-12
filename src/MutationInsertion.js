class Mutation {
  constructor() {}
  countIndex(size) {
    //wyznacza indeksy
    let indexOne = Math.floor(Math.random() * size);
    let indexTwo = Math.floor(Math.random() * size);
    if (indexOne == indexTwo) {
      this.countIndexes(size);
      return;
    }
    this.indexOne = indexOne;
    this.indexTwo = indexTwo;
  }
  insertion(solution) {
    const nodes = solution.getNodes();
    console.log(nodes);
    this.countIndex(nodes.length);
    const choosenCity = nodes[this.indexOne]; 
    const arrayWithoutChoosenCity = nodes.filter(value => value !== choosenCity);
    const newArray = [];
    for(let i=0; i<this.indexTwo; i++){
        newArray.push(arrayWithoutChoosenCity[i]);
    }
    newArray.push(choosenCity);
    for(let i = this.indexTwo; i< arrayWithoutChoosenCity.length; i++){
        newArray.push(arrayWithoutChoosenCity[i]);
    }
    solution.setNodes(newArray);
    console.log(this.indexOne, this.indexTwo,newArray);
  }
}
export default Mutation;
