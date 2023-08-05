import type { FormState } from '@/types';

const API_URL = 'https://api.musixmatch.com/ws/1.1/';

const fetchChart = async ({ chart, country, number }: FormState) => {
  const params = new URLSearchParams({
    country,
    page: '1',
    page_size: number?.toString() ?? '10',
    apikey: 'c93b979443af33c9e9f88812446b2eab',
  });

  const url = `${API_URL}${chart}.get?${params}`;

  const data = await (await fetch(url)).json();
  return data;
};

export default fetchChart;
