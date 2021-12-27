import React, { useMemo } from 'react';

const getColorKor = (color) => {
  console.log('getColorKor🎨');
  switch (color) {
    case 'red':
      return '빨강 색❤️';
    case 'orange':
      return '주황 색🧡';
    case 'yellow':
      return '노랑 색💛';
    case 'green':
      return '초록 색💚';
    case 'blue':
      return '파랑 색💙';
    case 'purple':
      return '보라 색💜';
    default:
      return '레인보우🌈';
  }
};

const getMovieGenreKor = (movie) => {
  console.log('getMovieGenreKor🎬');
  switch (movie) {
    case 'Marriage Story':
      return '드라마';
    case 'The Fast And The Furious':
      return '액션';
    case 'Avengers':
      return '슈퍼히어로';
    default:
      return '아직 잘 모름';
  }
};

const Info = ({ color, movie }) => {
  // const colorKor = getColorKor(color);
  const colorKor = useMemo(() => getColorKor(color), [color]);
  // const movieGenreKor = getMovieGenreKor(movie);
  const movieGenreKor = useMemo(() => getMovieGenreKor(movie), [movie]);

  return (
    <div className="info-wrapper">
      제가 가장 좋아하는 색은 {colorKor} 이고, <br />
      즐겨보는 영화 장르는 {movieGenreKor} 입니다.
    </div>
  );
};

export default Info;
