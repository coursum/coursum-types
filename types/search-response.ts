export interface SearchResponse<T> {
  stat: {
    total: number;
    latency: number; // Unit: milliseconds
  };
  hits: T[]; // | null;
}
