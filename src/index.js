import menu from "./menu";
import importer from "./importer";
import Solution from "./tabu_seach/Solution";
import Neighborhood from "./tabu_seach/Neighbourhood";
import Counter from "./Counter";
import Tabu_Search from "./tabu_seach/Tabu_Search";
import Timer from "./timer";
menu();
// const iteration = [200, 500, 1000, 2000];
// const cadention = [3, 5, 10];
// const neighbers = [5, 10];
// for (let ite = 1; ite < 4; ite++) {
    //   for (let cad = 0; cad < 3; cad++) {
        //     for (let nei = 0; nei < 2; nei++) {
    //   const files = ["tsp_10", "br17", "ftv33_1", "ftv44_1", "ftv56_1", "ftv65_1"];
    //   for (let fil = 0; fil < 4; fil++) {
    //     let summary= 0;
    //     let time = 0;
    //     const timer = new Timer();
    //     const nodes = importer(files[fil]);
    //     for (let i = 0; i < 5; i++) {
    //         timer.init();
    //       const solution = new Solution();
    //       solution.generate_random_path(nodes);
    //       const counter = new Counter(nodes);
    //       counter.count_value_of_solution(solution);

    //       const tabu_search = new Tabu_Search(iteration[ite], cadention[cad], neighbers[nei], nodes, solution);
    //       tabu_search.start();
    //       summary += tabu_search.best_value;
    //       time += timer.submit();
    //     }
    //     console.log(`${iteration[ite]}, ${cadention[cad]}, ${neighbers[nei]}, ${files[fil]}, ${summary}, ${time}`);
    //   }
//     }
//   }
// }
// const nodes = importer("ftv33_1");
// const solution = new Solution();
// solution.generate_random_path(nodes);
// const counter = new Counter(nodes);
// counter.count_value_of_solution(solution);

// const tabu_search = new Tabu_Search(2000, 3, 5, nodes, solution);
// tabu_search.start();
// console.log(tabu_search.best_value);
