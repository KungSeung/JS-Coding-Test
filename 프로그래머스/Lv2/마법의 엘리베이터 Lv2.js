function solution(storey) {
  let answer = 0;

  // 숫자를 하나씩 확인하기 위해 문자열로 변환해준다.
  const str = storey.toString();
  let help = 0;

  // 변환된 문자열을 뒤에서부터 확인한다.
  for (let i = str.length - 1; i >= 0; i--) {
    // 확인 중인 층을 숫자로 변환하고 보조인 help를 더해준다.
    // help는 밑에서 층을 올라갔을 경우 필요하다.
    const num = Number(str[i]) + help;

    // help를 다시 0으로 초기화한다.
    help = 0;

    // 확인된 숫자가 5층 초과일 경우
    if (num > 5) {
      // 10에서 num을 빼는 것이 마법의 돌을 덜 사용한다.
      // ex) 6층일 경우 4층을 일단 올려 10층으로 만들어준다.
      answer += 10 - num;

      // 10층으로 올렸기에 위에서 다음 숫자때 더해주기 위해 help에 1을 넣어준다.
      help = 1;

      // 층이 5층이거나 i가 0보다 클 때
    } else if (num === 5 && i > 0) {
      // 그 다음에 들어올 자리의 층의 높이가 5이상인지 확인한다.
      if (Number(str[i - 1]) >= 5) {
        // 다음 들어올 자리의 층이 5 이상일 경우
        // 층을 올려 가는 것이 더 효율적이기 때문에
        // 층을 올리고 help에 1을 넣어준다.
        answer += num;
        help = 1;
      } else {
        // 아니면 그냥 층을 내려간다.
        answer += num;
      }
    } else {
      // 층이 5층 보다 아래일 경우 층을 내려간다.
      answer += num;
    }
  }

  // 마지막 help가 남아있을 경우 더해준다.
  if (help > 0) answer += help;
  return answer;
}
