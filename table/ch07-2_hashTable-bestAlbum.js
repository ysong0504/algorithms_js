/**
 *
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 *
 */

// 깉은 장르끼리 묶기
// 묶인 노래들을 재생 순으로 정렬 필요
// 노래를 2개까지 자를 작업을 해야해

// 핵임 키워드 = 묶는것과 정렬

function solution(genres, plays) {
  const table = new Map();
  genres.forEach((v, i) => {
    const genreData = table.get(v) || { total: 0, song: [] };
    const genre = v;
    const play = plays[i];
    table.set(genre, {
      total: (genreData.total += play),
      song: [...genreData.song, { play, i }]
        .sort((a, b) => b.play - a.play) // 많이 재생된 리스트만큼 내림차순
        .splice(0, 2), // 최대 2곡까지만 수록이 가능하므로 splice 진행
    });
  });

  return [...table.entries()] // map을 반복문으로 이용할 수 있도록 iterator 객체로 변환
    .sort((a, b) => b[1].total - a[1].total) // 총 플레이 횟수 기준으로 장르 내림차순 정렬
    .flatMap((v) => v[1].song) // 플레이 횟수만 출력
    .map((v) => v.i);
}
