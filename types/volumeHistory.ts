export interface IVolumeHistory {
  period: number;
  volume: string;
}

export interface IStoreVolumeHistory {
  history: IVolumeHistory[];
  isLoading: boolean;
  error: string;
}
