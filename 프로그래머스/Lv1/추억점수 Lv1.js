function solution(name, yearning, photo) {
  var answer = [];

  // 자료구조 hash
  let hash = new Map();
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    hash.set(name[i], yearning[i]);
  }

  photo.forEach((arr) => {
    for (let j = 0; j < arr.length; j++) {
      let missHuman = arr[j];
      // missHuman이 있음?
      if (hash.get(missHuman) >= 1) {
        sum += hash.get(missHuman);
      }
    }
    answer.push(sum);
    sum = 0;
  });

  return answer;
}
