/// <reference types="vite/client" />

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler({ body }: VercelRequest, response: VercelResponse) {
  const { chart, country, number } = JSON.parse(body);
  const API_URL = 'https://api.musixmatch.com/ws/1.1/';

  const params = new URLSearchParams({
    country,
    page: '1',
    format: 'json',
    apikey: process.env.API_KEY ?? '',
    page_size: number?.toString() ?? 10,
  });

  const url = `${API_URL}chart.${chart}.get?${params}`;

  const data = await (await fetch(url)).json();

  response.status(200).json({ body: data, params: JSON.parse(body) });
}
