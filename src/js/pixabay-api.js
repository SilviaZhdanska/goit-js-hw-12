import axios from 'axios';

const API_KEY = '44780398-b9dbe1b89370a8f5261d05d93';

export async function getPicturesByQuery(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
