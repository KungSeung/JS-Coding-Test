function solution(n, m, section) {
  let count = 0;
  const arr = Array.from(Array(n + 1).fill(null));

  section.forEach((el) => {
    arr[el] = 1;
  });

  section.forEach((el) => {
    if (arr[el]) {
      arr.fill(null, el, el + m);
      count++;
    }
  });
  return count;
}

function solution2(n, m, section) {
  var answer = 0;

  // 현재까지 칠한 구역
  let part = 0;

  section.forEach((x) => {
    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (x > part) {
      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시킨다.
      part = x + m - 1;

      // 칠했으니 1 증가
      answer++;
    }
  });

  return answer;
}
