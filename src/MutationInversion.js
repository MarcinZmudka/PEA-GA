class Mutation {
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
    inversion(solution){
        const nodes = solution.getNodes();
        this.countIndexes(nodes.length);
        const range = this.getRangeFromSolution(solution);
        let indexRange = range.length-1;
        const newNodes = nodes.map((value, index) => {
            if(index < this.indexOne)
                return value;
            if(index > this.indexTwo)
                return value;
            return range[indexRange--];
        });
        solution.setNodes(newNodes);
    }
}
export default Mutation;