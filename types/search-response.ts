interface Hit<T> {
  id: string;
  score: number;
  data: T;
  highlight: any;
}

export interface SearchResponse<T> {
  stat: {
    total: number;
    latency: number; // Unit: milliseconds
  };
  hits: Hit<T>[];
}
