export interface PauseReport {
  pauseType: string;
  duration: string;
  dateOfRealization: string;
  timeOfRealization: string;
  state: 'Completado' | 'No completado';
}
