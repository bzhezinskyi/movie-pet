import axios from 'axios';

const keyApi = '9e8b55203cd36bc26921f9fe565ad09d';
const themoviedbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getTrending = async ({ mediaType, timeWindow }) => {
  const { data } = await themoviedbApi.get(
    `/trending/${mediaType}/${timeWindow}`,
    {
      params: { api_key: keyApi, language: 'uk' },
    }
  );
  return data;
};

export const getSearchMovies = async ({ query = '' }) => {
  const { data } = await themoviedbApi.get('/search/movie', {
    params: { api_key: keyApi, query, language: 'uk' },
  });
  return data;
};

export const getMoviesId = async ({ movieId, mediaType, detail = '' }) => {
  // '/credits' '/reviews`
  const { data } = await themoviedbApi.get(
    `/${mediaType}/${movieId}${detail}`,
    {
      params: { api_key: keyApi, language: 'uk' },
    }
  );
  return data;
};
