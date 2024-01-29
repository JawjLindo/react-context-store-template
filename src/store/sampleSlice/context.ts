import {
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  createContext,
  createElement,
  useReducer,
} from 'react';
import { SampleContextActions, SampleState } from './types';
import { produce } from 'immer';

export const sampleValueContext = createContext<SampleState | null>(null);
export const sampleDispatchContext =
  createContext<Dispatch<SampleContextActions> | null>(null);

const initialState: SampleState = {
  message: 'Hello, World!',
};

const sampleReducer = (
  state: SampleState,
  action: SampleContextActions
): SampleState => {
  switch (action.type) {
    case 'sample/changeMessage':
      return produce<SampleState>(state, (draft) => {
        draft.message = action.payload;
      });
  }
};

export const SampleProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(sampleReducer, initialState);

  const valueProvider = createElement(sampleValueContext.Provider, {
    value: state,
    children,
  });
  const dispatchProvider = createElement(sampleDispatchContext.Provider, {
    value: dispatch,
    children: valueProvider,
  });

  return dispatchProvider;
};
