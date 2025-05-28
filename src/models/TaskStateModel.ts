import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[]; // histórico, MainForm
  secondRemaining: number; // CountDown, Histórico, MainForm, no Button
  formattedSecondsRenaiminig: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, no Button
  currentCycle: number; // 1 a 8: Home
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
