export type State = {
  typedColor: string;
  boxColor: string;
  boxColorsList: string[];
  savedColors: string[];
  results: string[];
  error: string;
};

export type ActionType =
  | {
      type: 'INIT';
    }
  | {
      type: 'CHANGE_BOX_COLOR';
      payload: string;
    }
  | {
      type: 'SAVE_COLOR';
    }
  | {
      type: 'CHOSE_COLOR';
      payload: string;
    };
