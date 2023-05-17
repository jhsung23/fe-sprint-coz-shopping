import { createAction, handleActions } from 'redux-actions';

import initialData from '../data/initialData';

const OPEN = 'modal/OPEN';
const CLOSE = 'modal/CLOSE';

export const open = createAction(OPEN, (id, titleLeft, imageUrl) => ({
  id,
  titleLeft,
  imageUrl,
}));
export const close = createAction(CLOSE);

const modal = handleActions(
  {
    [OPEN]: (state, { payload: content }) => ({
      isOpen: true,
      content,
    }),
    [CLOSE]: (state) => ({
      isOpen: false,
      content: {},
    }),
  },
  initialData.modal
);

export default modal;
