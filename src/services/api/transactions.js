import {fetchAPI} from '../utils/fetchAPI';

export const getDataTRX = async () => {
  try {
    const result = await fetchAPI();
    return result;
  } catch (error) {
    throw error;
  }
};
