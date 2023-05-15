import { createAction, handleActions } from 'redux-actions';
import initialData from '../data/initialData';

const TOGGLE = 'bookmark/TOGGLE';

export const toggle = createAction(TOGGLE, (id) => id);

const bookmark = handleActions(
  {
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      itemsId: state.itemsId.includes(id)
        ? state.itemsId.filter((itemId) => itemId !== id)
        : [...state.itemsId, id],
    }),
  },
  initialData.bookmark
);

export default bookmark;
