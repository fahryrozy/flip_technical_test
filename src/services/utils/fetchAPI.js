import axios from 'axios';

export const fetchAPI = async () => {
  try {
    const req = await axios({
      method: 'GET',
      url: `https://nextar.flip.id/frontend-test`,
    });
    if (req.status !== 400) {
      return req;
    }
  } catch (e) {
    throw e;
  }
};
