function solution(n, times) {
  // 심사 시간이 최소일 때를 구하라
  // 10억명 = 선형으로는 불가, LogN이 필요함

  // 특정 값을 찾는 것이 아니다! -> 계산된 시간이 필요함 = 결정문제
  // 결정문제: 특정 값이 아닌 계산을 통해 나오는 로직 = Parametric Search

  // 최소 1분에서 10억분 * n 명
  // 면접관들이 몇명을 처리하는가
  // = 처리 가능한 입국자 수가 작다면 시간(분)을 올려야하고 처리가능한 입국자 수가 크다면 시간(분)을 낮춰야한다...
  // 당연하거임, 처리 가능한 입국자수 > 실제 입국자수 = 시간 줄일 수 있다!
  // 처리 가능한 입국자수 < 실제 입국자수 = 시간이 더 필요하다!
  // 면접관이 시간대비 몇명을 처리할 수 있는가
  // ㄴ 시간 / 심사시간 = 심사관당 처리할 수 있는 입국자 수

  // 오름차순으로 시간 정렬
  const sortedTimes = times.sort((a, b) => a - b);

  let left = 1;
  let right = sortedTimes[sortedTimes.length - 1] * n; // 최대로 걸리는 시간

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const sum = sortedTimes.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );
    console.log(mid, sum);

    if (sum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
