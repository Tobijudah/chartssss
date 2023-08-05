export type Chart = 'songs' | 'artists';

export type FormState = {
  chart: Chart;
  country: string;
  number: null | number;
};
