import { createAction, handleActions } from 'redux-actions';
import initialData from '../data/initialData';

const GET = 'filter/GET';

export const get = createAction(GET);

const filter = handleActions(
  {
    [GET]: (state) => ({ ...state }),
  },
  initialData.filter
);

export default filter;
