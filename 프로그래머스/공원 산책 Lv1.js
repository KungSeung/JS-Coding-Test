// 1시간 5분정도?
function solution(park, routes) {
  var answer = [];

  let start = new Array(2);

  // 가로, 세로 길이
  const widthLen = park[0].length;
  const highLen = park.length;

  for (let i = 0; i < highLen; i++) {
    for (let j = 0; j < widthLen; j++) {
      if (park[i][j] === "S") {
        start[0] = i;
        start[1] = j;
        break;
      }
    }
  }

  // 동 서 남 북
  // 이동거리 측정
  const moveFunc = (i) => {
    let moveLen = Number(routes[i][2]);
    console.log(moveLen);
    // +
    if (routes[i][0] === "E") {
      if (start[1] + moveLen >= widthLen) return;
      for (let j = start[1]; j <= start[1] + moveLen; j++) {
        if (park[start[0]][j] === "X") return;
      }

      start[1] += moveLen;
      // -
    } else if (routes[i][0] === "W") {
      if (start[1] - moveLen < 0) return;
      for (let j = start[1]; j >= start[1] - moveLen; j--) {
        if (park[start[0]][j] === "X") return;
      }

      start[1] -= moveLen;
      // +
    } else if (routes[i][0] === "S") {
      if (start[0] + moveLen >= highLen) return;
      for (let j = start[0]; j <= start[0] + moveLen; j++) {
        if (park[j][start[1]] === "X") return;
      }

      start[0] += moveLen;
      // -
    } else if (routes[i][0] === "N") {
      if (start[0] - moveLen < 0) return;
      for (let j = start[0]; j >= start[0] - moveLen; j--) {
        if (park[j][start[1]] === "X") return;
      }

      start[0] -= moveLen;
    }
    console.log(start);
  };

  for (let i = 0; i < routes.length; i++) {
    moveFunc(i);
  }

  answer[0] = start[0];
  answer[1] = start[1];

  return answer;
}

function solution2(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}
