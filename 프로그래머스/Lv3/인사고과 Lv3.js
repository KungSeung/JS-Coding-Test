function solution(scores) {
  var answer = 0; // 석차

  // 근무 태도 점수, 동료 평가 점수

  // 다른 사람들보다 둘다 낮은 경우가 한번이라도 있으면! 인센 x

  // 둘 중 하나라도 다른 사람보다 높으면 인센 o
  // 얘들끼리 석차를 냄
  // 동석차일 경우 동석차 수 만큼 석차를 건너뜀

  // 배열 원소 하나씩 다 검사 i0 > i1i2i3i4i5
  var newArr = new Array(scores.length);
  for (let i = 0; i < scores.length; i++) {
    newArr[i] = new Array(2);
  }

  // 기존 배열에서 false인 애들만 잘라내면 된다
  for (let i = 0; i < scores.length; i++) {
    let idx1 = scores[i][0];
    let idx2 = scores[i][1];
    for (let j = i + 1; j < scores.length; j++) {
      // idx1의 참,거짓
      if (idx1 > scores[j][0]) {
        newArr[i][0] = true;
        newArr[j][0] = false;
      } else if (idx1 < scores[j][0]) {
        newArr[i][0] = false;
        newArr[j][0] = true;
      } else {
        newArr[i][0] = true;
        newArr[j][0] = true;
      }

      // idx2의 참,거짓
      if (idx2 > scores[j][1]) {
        newArr[i][1] = true;
        newArr[j][1] = false;
      } else if (idx1 < scores[j][1]) {
        newArr[i][1] = false;
        newArr[j][1] = true;
      } else {
        newArr[i][1] = true;
        newArr[j][1] = true;
      }
      // 종료조건 : '완호점수'가 둘 다 false인 경우
      // 크거나 같으면 true, 낮으면 false
      if (newArr[0][0] === false && newArr[0][1] === false) return -1;
    }

    // false인 요소 제거
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i][0] === false && newArr[i][1] === false) {
        scores.splice(i, 1);
        console.log(scores);
        newArr.splice(i, 1);
        break;
      }
    }
  }

  let semiAns = [];

  // 석차 매기기
  for (let i = 0; i < scores.length; i++) {
    semiAns.push(scores[i][0] + scores[i][1]);
  }
  semiAns.sort();

  let whanHoScore = scores[0][0] + scores[0][1];
  let whanHoIdx = 0;
  for (let i = 0; i < scores.length; i++) {
    if (semiAns[i] === whanHoScore) {
      if (semiAns[i + 1] > whanHoScore) {
        whanHoIdx = i;
        answer = semiAns.length - whanHoIdx;
        return answer;
      } else continue;
    }
  }

  return answer;
}

let scores = [
  [2, 2],
  [1, 4],
  [4, 2],
  [3, 2],
  [3, 1],
  [2, 1],
];

// 코드는 맞는거같은데 출력크기 문젠가?
// 그러기엔 테스트 케이스를 너무 많이 틀리긴한다..
// 정답률 24점..

function solution2(scores) {
  let answer = 1;
  const target = scores[0];

  scores.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0]; // 첫번째 요소 : 내림차순
    return a[1] - b[1]; // 두번째 요소 : 오름차순
  });

  let before = 0;
  for (const s of scores) {
    // 둘 다 작을 경우
    if (target[0] < s[0] && target[1] < s[1]) return -1;

    // before의 역할
    // 내림차순으로 scores를 정렬했기 때문에
    // before값이 오른쪽 s[1]값보다 작다면 값이 작을 수 밖에 없다.
    // 그러므로 크거나 같으면 count를 하는데
    // 같은 경우는 동차에 해당된다. ex) ... [3,3], [3,3] ... 인 경우
    if (before <= s[1]) {
      // 동차는 <= 에서 계산이 된다
      if (target[0] + target[1] < s[0] + s[1]) answer++;
      before = s[1];
    }
  }
  console.log(scores);
  return answer;
}

console.log(solution2(scores));
