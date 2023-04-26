import { SELECT_BRAND } from './actions';

const initialState = {
  selectedBrand: 'Voss'
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_BRAND:
      return {
        ...state,
        selectedBrand: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
