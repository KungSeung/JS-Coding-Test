function solution(players, callings) {
  var answer = [];

  // 이중 for문
  // 시간복잡도에서 문제가 남
  // 실패이유 : 시간 초과
  // O(n^2) = 50000 x 1000000 = 5백억번

  // hash자료구조를 사용하면 O(n)으로 만들 수 있음
  const hash = new Map();

  players.forEach((name, idx) => {
    hash.set(name, idx);
  });

  callings.forEach((name) => {
    const currIdx = hash.get(name); // key
    const front = players[currIdx - 1]; // 플레이어의 name

    [players[currIdx - 1], players[currIdx]] = [
      players[currIdx],
      players[currIdx - 1],
    ];

    hash.set(name, hash.get(name) - 1);
    hash.set(front, hash.get(name) + 1);
  });

  answer = [...players];

  return answer;
}
