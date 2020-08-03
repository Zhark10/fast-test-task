export interface IAction<TPayload = any> {
  type: string
  payload: TPayload
}