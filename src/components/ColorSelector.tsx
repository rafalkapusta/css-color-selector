import React, { FC, Reducer, useEffect, useReducer } from 'react';
import { State, ActionType } from '../types';
import { reducer, initialState } from '../reducer';
import Box from './Box';
import Autocomplete from './Autocomplete';
import SaveColor from './SaveColor';
import SavedColorsList from './SavedColorsList';

const TaskOne: FC = () => {
  const [state, dispatch] = useReducer<Reducer<State, ActionType>>(
    reducer,
    initialState
  );

  const { boxColor, typedColor, results, savedColors, error } = state;

  useEffect(() => {
    dispatch({ type: 'INIT' });
  }, []);

  return (
    <div className="container">
      <h1 className="title is-1">CSS COLOR SELECTOR</h1>
      {error && <div className="notification is-danger is-light">{error}</div>}
      <Box boxColor={boxColor} typedColor={typedColor} />
      <div className="is-flex">
        <Autocomplete
          typedColor={typedColor}
          results={results}
          dispatch={dispatch}
        />
        <SaveColor dispatch={dispatch} />
      </div>
      <SavedColorsList savedColors={savedColors} dispatch={dispatch} />
    </div>
  );
};

export default TaskOne;
