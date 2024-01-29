import { Dispatch, useContext } from 'react';
import { SampleContextActions, SampleState } from './types';
import { sampleDispatchContext, sampleValueContext } from './context';

export const useSample = (): SampleState => {
  const value = useContext(sampleValueContext);
  if (value == null) throw new Error('Must be within a context provider');
  return value;
};

const useSampleDispatchContext = (): Dispatch<SampleContextActions> => {
  const value = useContext(sampleDispatchContext);
  if (value == null) throw new Error('Must be within a context provider');
  return value;
};

type SampleActions = {
  changeMessage: (message: string) => void;
};

export const useSampleActions = (): SampleActions => {
  const dispatch = useSampleDispatchContext();

  const changeMessage = (message: string) =>
    dispatch({ type: 'sample/changeMessage', payload: message });

  return { changeMessage };
};
