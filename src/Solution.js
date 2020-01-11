class Solution {
  constructor(nodes = []) {
    this.value = -1;
    this.nodes = nodes;
  }
  generateRandomPath(nodes_all) {
    const length = nodes_all.length;
    let left_numbers = Array(length)
      .fill(null)
      .map((value, index) => index);
    function rand(size) {
      // zwraca liczbę od 0 do size -1
      return Math.floor(Math.random() * size);
    }
    this.nodes = [];
    for (let i = 0; i < length; i++) {
      const index = rand(left_numbers.length);
      const new_value = left_numbers[index];
      this.nodes.push(new_value);
      left_numbers = left_numbers.filter(
        (value, index_1) => value != new_value
      );
    }
  }
  getNodes() {
    return this.nodes;
  }
  setNodes(nodes) {
    this.nodes = nodes;
  }
  getValue() {
    if (this.value == -1) {
      console.log("wartośc nie ustawiona");
    }
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}
export default Solution;
