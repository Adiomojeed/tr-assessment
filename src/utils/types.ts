export interface MedalData {
  code: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number
}

export type SortType = 'gold' | 'silver' | 'bronze' | 'total';