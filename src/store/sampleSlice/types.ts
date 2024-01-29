export type SampleState = {
  message: string;
};

type ChangeMessageAction = {
  type: 'sample/changeMessage';
  payload: string;
};

export type SampleContextActions = ChangeMessageAction;
