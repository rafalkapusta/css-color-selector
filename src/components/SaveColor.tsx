import React, { Dispatch, FC } from 'react';
import { ActionType } from '../types';

type Props = {
  dispatch: Dispatch<ActionType>;
};

const SaveColor: FC<Props> = ({ dispatch }) => {
  return (
    <button
      className="button is-primary ml-4"
      onClick={() => dispatch({ type: 'SAVE_COLOR' })}
    >
      Save color
    </button>
  );
};
export default SaveColor;
