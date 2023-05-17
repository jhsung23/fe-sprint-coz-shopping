import { createAction, handleActions } from 'redux-actions';

import initialData from '../data/initialData';

const ALERT = 'toast/ALERT';
const DISMISS = 'toast/DISMISS';

export const alert = createAction(ALERT, (id, actionType) => ({
  id,
  actionType,
}));
export const dismiss = createAction(DISMISS, (id) => id);

export const alertAsync = (id, actionType) => (dispatch) => {
  dispatch(alert(id, actionType));
  setTimeout(() => {
    dispatch(dismiss(id));
  }, 3000);
};

const toast = handleActions(
  {
    [ALERT]: (state, { payload: item }) => ({
      ...state,
      items: [...state.items, item],
    }),
    [DISMISS]: (state, { payload: id }) => ({
      ...state,
      items: state.items.filter((item) => item.id !== id),
    }),
  },
  initialData.toast
);

export default toast;
