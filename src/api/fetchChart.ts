import type { FormState } from '@/types/app';
import type { FetchChartRequest, FetchChartResponse } from '@/types/api';

const fetchChart = async ({ queryKey }: FetchChartRequest): Promise<FetchChartResponse> => {
  const { chart, country, number } = queryKey[0] as FormState;
  if (!country) return Promise.resolve(null);

  return await (
    await fetch('/api/musixmatch', {
      method: 'POST',
      body: JSON.stringify({ chart, country, number }),
    })
  ).json();
};

export default fetchChart;
