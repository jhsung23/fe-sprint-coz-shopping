import { createAction, handleActions } from 'redux-actions';

import initialData from '../data/initialData';

const OPEN = 'menu/OPEN';

export const open = createAction(OPEN, (isOpen) => isOpen);

const menu = handleActions(
  {
    [OPEN]: (state, { payload: isOpen }) => ({
      ...state,
      isOpen,
    }),
  },
  initialData.menu
);

export default menu;
