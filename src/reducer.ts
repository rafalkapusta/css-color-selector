import { State, ActionType } from './types';
import { boxColorsList } from './helpers/boxColorsList';

export const reducer = (state: State, action: ActionType) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        boxColorsList: boxColorsList,
      };
    case 'CHANGE_BOX_COLOR':
      let boxColor = '';
      if (boxColorsList.includes(action.payload.toLocaleLowerCase())) {
        boxColor = action.payload;
      }
      return {
        ...state,
        typedColor: action.payload,
        boxColor: boxColor,
        results: action.payload && !boxColor ? boxColorsList.filter((color) => color.startsWith(action.payload.toLowerCase())) : [],
        error: '',
      };
    case 'SAVE_COLOR':
      if (!state.boxColor) {
        return {
          ...state,
          error: 'Chose color',
        };
      }
      if (state.savedColors.includes(state.boxColor)) {
        return {
          ...state,
          error: 'This color is already saved.',
        };
      }
      let savedColors;
      if (state.savedColors.length < 10) {
        savedColors = [state.boxColor, ...state.savedColors];
      } else {
        state.savedColors.pop();
        savedColors = [state.boxColor, ...state.savedColors];
      }
      return {
        ...state,
        savedColors: savedColors,
      };

    case 'CHOSE_COLOR':
      return {
        ...state,
        typedColor: action.payload,
        boxColor: action.payload,
        results: [],
      };
  }
};

export const initialState: State = {
  typedColor: '',
  boxColor: '',
  boxColorsList: [],
  savedColors: [],
  results: [],
  error: '',
};
