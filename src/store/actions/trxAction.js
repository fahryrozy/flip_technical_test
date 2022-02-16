import {ToastAndroid} from 'react-native';

import {getDataTRX} from '../../services/api/transactions';

export const getLisTRX = () => {
  return async dispatch => {
    dispatch({
      type: 'GET_LIST_TRX_REQUEST',
    });

    try {
      const result = await getDataTRX();
      if (result.status === 200) {
        dispatch({
          type: 'GET_LIST_TRX_SUCCESS',
          payload: result.data,
        });
      } else {
        dispatch({
          type: 'GET_LIST_TRX_FAILED',
          error: result.data,
        });
      }
    } catch (err) {
      dispatch({
        type: 'GET_LIST_TRX_FAILED',
        error: err,
      });
      ToastAndroid.showWithGravity(
        err.response.data.errorMessage,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };
};

export const sortModal = visible => {
  return async dispatch => {
    dispatch({
      type: 'SORT_MODAL',
      payload: visible,
    });
  };
};

export const selectSortOption = option => {
  return async dispatch => {
    dispatch({
      type: 'SELECT_SORT_OPTION',
      payload: option,
    });
  };
};
