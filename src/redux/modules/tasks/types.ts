export interface TTasks {
  tasks: ITask[]
}

export interface ITask {
  name: string;
  time: number;
  isStarted: boolean;
}