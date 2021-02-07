import React, { Dispatch, FC } from 'react';
import { ActionType } from 'types';

type Props = {
  typedColor: string;
  results: string[];
  dispatch: Dispatch<ActionType>;
};

const Autocomplete: FC<Props> = ({ typedColor, results, dispatch }) => {
  const changeBoxColor = (value: string) => {
    dispatch({ type: 'CHANGE_BOX_COLOR', payload: value });
  };

  return (
    <div className="field">
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="type color"
          value={typedColor}
          onChange={(event) => changeBoxColor(event.target.value)}
        />
      </div>
      <div className="autocomplete-list">
        {results.map((color) => (
          <div
            className="notification mb-0 list-item"
            key={color}
            style={{ backgroundColor: color }}
            onClick={(event) => {
              dispatch({
                type: 'CHOSE_COLOR',
                //@ts-ignore
                payload: event.target.innerHTML,
              });
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Autocomplete;
