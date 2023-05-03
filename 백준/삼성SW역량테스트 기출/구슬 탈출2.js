const solution = (N, M, board) => {
  let answer = 0;
  // 상 하 좌 우 움직임 가능
  // 근데 한번가면 그 방향으로 장애물'#'을 만날때까지 쭉 가야됨
  // R, B도 같이 움직인다
  // 갈 수 있는 방향이 여러개라면?

  let startR = [];
  let startB = [];

  // /,/ : ,(콤마)를 찾음
  // g = global
  for (let i = 0; i < N; i++) {
    let idR = String(board[i]).replace(/,/g, "").indexOf("R");
    let idB = String(board[i]).replace(/,/g, "").indexOf("B");

    if (idR !== -1) startR = [i, idR];
    if (idB !== -1) startB = [i, idB];
    if (idR >= 0 && idB >= 0) break;
  }

  console.log(startR, startB);

  return answer;
};

let N = 5;
let M = 5;
let board = [
  ["#", "#", "#", "#", "#"],
  ["#", ".", ".", "B", "#"],
  ["#", ".", "#", ".", "#"],
  ["#", "R", "0", ".", "#"],
  ["#", "#", "#", "#", "#"],
];

solution(N, M, board);
