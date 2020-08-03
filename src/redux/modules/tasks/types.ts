export interface TTasks {
  tasks: ITask[]
}

export interface ITask {
  name: string;
  time: string;
  isStarted: boolean;
}