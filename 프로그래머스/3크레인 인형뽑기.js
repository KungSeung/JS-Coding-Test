function solution(Board, moves) {
  let stack = [];
  let eraseCount = 0;

  // moves idx값에 따라 하나씩 돌린다
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < Board.length; j++) {
      let idx = moves[i] - 1;
      if (Board[j][idx] !== 0) {
        stack.push(Board[j][idx]);
        Board[j][idx] = 0;
        if (stack[stack.length - 1] === stack[stack.length - 2]) {
          eraseCount += 2;
          stack.pop();
          stack.pop();
        }
        break;
      } else continue;
    }
  }

  return eraseCount;
}

let Board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let moves = [1, 5, 3, 5, 1, 2, 4];

console.log(solution(Board, moves));
