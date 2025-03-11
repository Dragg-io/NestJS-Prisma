//TODO: Estudar esse facilitador, há muitas coisas aqui que não entendo

export type Replace<OriginalType, ReplaceType> = Omit<
  OriginalType,
  keyof ReplaceType
> &
  ReplaceType;
