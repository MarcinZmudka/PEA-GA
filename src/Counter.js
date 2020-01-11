
class Counter {
  constructor(nodes) {
    this.nodes = nodes;
  }
  count_value_of_solution(solution) {
    let value = 0;
    solution.getNodes().map((node, index, array) => {
      value += this.nodes[node][array[(index + 1) % array.length]];
    });
    solution.setValue(value);
  }
}
export default Counter;
