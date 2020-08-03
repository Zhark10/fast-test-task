type TActionTypes<TEnumActionTypes> = { [key in keyof TEnumActionTypes]: string }

export const generateActionTypes = <T>(enumActions: T, moduleName: string): TActionTypes<T> => Object
  .values(enumActions)
  .filter((action: string | number): action is string => typeof action === 'string')
  .reduce((acc: TActionTypes<T>, action: string) => ({
    ...acc,
    [action]: `${moduleName}/${action}`,
  }), {} as TActionTypes<T>);
