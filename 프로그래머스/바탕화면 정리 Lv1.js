function solution2(wallpaper) {
  let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
  // x1 => min i
  // x2 => max i
  // y1 => min idx
  // y2 => max idx
  wallpaper.forEach((paper, i) => {
    if (paper.includes("#")) {
      x1 = Math.min(x1, i);
      y1 = Math.min(y1, paper.indexOf("#"));
      x2 = Math.max(x2, i);
      y2 = Math.max(y2, paper.lastIndexOf("#"));
    }
  });
  return [x1, y1, x2 + 1, y2 + 1];
}

function solution(wallpaper) {
  var answer = [];

  let idx,
    idy,
    rdx,
    rdy = 0;
  // idx, idy 컨트롤
  let cnt = 0;
  // rdx, rdy 컨트롤
  let rcnt = 0;

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[0].length; j++) {
      // 최초
      if (wallpaper[i][j] === "#" && cnt === 0) {
        (idx = i), (rdx = i);
        (idy = j), (rdy = j);
        cnt++;
      }

      if (wallpaper[i][j] === "#" && cnt === 1) {
        if (idy > j) idy = j;
        if (rdx < i) rdx = i;
        if (rdy < j) rdy = j;
      }
    }
  }
  answer = [idx, idy, rdx + 1, rdy + 1];
  return answer;
}
