function solution(today, terms, privacies) {
  const answer = [];

  const expire = new Date(today);

  const termMap = new Map();
  terms.forEach((item) => {
    const [type, term] = item.split(" ");
    termMap.set(type, Number(term));
  });

  privacies.forEach((item, idx) => {
    const [data, type] = item.split(" ");

    const chDate = new Date(data);

    chDate.setMonth(chDate.getMonth() + termMap.get(type));
    console.log(chDate);

    if (chDate <= expire) answer.push(idx + 1);
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1

// 내 코드 + Date 함수 사용
// 원래 내 코드에서 문제점은 if문 비교에서 나왔다.
function solution2(today, terms, privacies) {
  var answer = [];

  // answer : 파기해야할 정보 / 오름차순

  // 문자열 파싱문제

  // today parsing
  const todayData = today.split(".");
  let todayYY = Number(todayData[0]);
  let todayMM = Number(todayData[1]);
  let todayDD = Number(todayData[2]);

  // 약관(key) : 유효기간(value)
  let termsFind = new Map();
  terms.forEach((x) => {
    let tmp = x.split(" ");
    termsFind.set(tmp[0], tmp[1]);
  });

  for (let i = 0; i < privacies.length; i++) {
    let tmp = privacies[i].split(" ");

    let whatKind = tmp[1];
    let termValue = Number(termsFind.get(whatKind));

    let privateData = tmp[0].split(".");
    let privateYY = Number(privateData[0]);
    let privateMM = Number(privateData[1]);
    let privateDD = Number(privateData[2]);

    privateMM += termValue;
    if (privateMM > 12) {
      privateYY += 1;
      privateMM -= 12;
    }

    let expire = new Date(todayYY, todayMM, todayDD);
    let chDate = new Date(privateYY, privateMM, privateDD);

    if (chDate <= expire) answer.push(i + 1);
  }
  return answer;
}
