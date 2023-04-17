function solution(plans) {
  var answer = [];

  // 끝내는 시간 반환
  function timeFunc(startTime, playTime) {
    startTime = startTime.toString().replace(":", ".");
    if (1 <= playTime && playTime <= 60) playTime = (playTime * 1) / 100;
    else {
      hour = 1;
      minute = ((playTime - 60) * 1) / 100;
      playTime = hour + minute;
    }
    // 12.4 1.01 13.41
    let endTime = (startTime = playTime);
    return endTime;
  }

  // name, start, playtime
  // 시간순으로 정렬되어 있지 않다.
  // 시간순 정렬
  plans.sort((a, b) => {
    let a1 = a[1].replace(":", ".");
    let b1 = b[1].replace(":", ".");
    return a1 - b1;
  });

  // dfs인거 같다
  // 함수를 실행하고 또 실행하는?
  function DFS(startTime, playTime, idx) {
    let endTime = timeFunc(startTime, playTime);
    for (let i = idx; idx < plans.length; i++) {
      let nextStart = plans[i][1].toString().replace(":", ".");

      // 새롭게 시작하는 과제의 시작이 끝나는 시간과 같다면
      // idx가 i보다 1크다
      if (nextStart === endTime) {
        answer.push(plans[i - 1][0]);
        DFS(plans[i][1], plans[i][2], i + 1);
      }

      // 과제 중에 새롭게 시작해야할 과제가 있다면
      if (startTime < nextStart && nextStart < endTime) {
        answer.push(DFS(plans[i][1], plans[i][2], i + 1));
      } else {
        // 없으면 끝내면 된다
        // 과제이름 리턴하고 answer에 push
        console.log(plans[i][0]);
        return plans[i][0];
      }
    }
  }

  let startTime = plans[(0, 1)];
  let playTime = plans[(0, 2)];
  let idx = 1;

  DFS(startTime, playTime, idx);

  return answer;
}
