const initialState = {
  trx: [],
  sortModal: false,
  sortOption: {label: 'URUTKAN', value: ''},
  selectedTrx: '',
  isLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_LIST_TRX_REQUEST': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_LIST_TRX_SUCCESS': {
      return {
        ...state,
        trx: action.payload,
        isLoading: false,
      };
    }
    case 'GET_LIST_TRX_FAILED': {
      return {
        ...state,
        isLoading: false,
      };
    }
    case 'SORT_MODAL': {
      return {
        ...state,
        sortModal: action.payload,
      };
    }
    case 'SELECT_SORT_OPTION': {
      return {
        ...state,
        sortOption: action.payload,
      };
    }
    default:
      return state;
  }
};
