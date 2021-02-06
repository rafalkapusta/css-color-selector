import React, { Dispatch, FC } from 'react';
import { ActionType } from '../types';

type Props = {
  savedColors: string[];
  dispatch: Dispatch<ActionType>;
};

const SavedColorsList: FC<Props> = ({ savedColors, dispatch }) => {
  if (savedColors.length) {
    return (
      <div className="box is-flex saved-colors-list">
        {savedColors.map((color, index) => (
          <button
            key={`${color}-${index}`}
            className="button"
            style={{ background: color }}
            onClick={() => {
              dispatch({
                type: 'CHOSE_COLOR',
                payload: color,
              });
            }}
          >
            {color}
          </button>
        ))}
      </div>
    );
  }
  return null;
};

export default SavedColorsList;
