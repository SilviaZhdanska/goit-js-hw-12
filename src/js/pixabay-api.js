import axios from 'axios';

const API_KEY = '44780398-b9dbe1b89370a8f5261d05d93';

export async function getPicturesByQuery(query) {
  const params = {
    key: '44784729-ebc9a0f5cc587c2700d41657d',
    q: query,
    imageType: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 15,
  };

  const url = 'https://pixabay.com/api/';

  try {
    const response = await axios.get(url, { params });

    if (response.status !== 200) {
      throw new Error('Request failed with status ${response.status}');
    }

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
