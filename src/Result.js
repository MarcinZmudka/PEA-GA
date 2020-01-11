class Result{
    value = Infinity;
    bestSolution = null;
    checkValue(solution){
        if(solution.getValue() < this.value){
            this.value = solution.getValue();
            this.bestSolution = solution; 
        }
    }
}
export default Result;