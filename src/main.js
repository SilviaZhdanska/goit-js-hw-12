import axios from 'axios';
import { getPicturesByQuery } from './js/pixabay-api.js';
import {
  renderGallery,
  showNoResultsMessage,
  showFetchErrorMessage,
} from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

searchForm.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase();

  if (!queryValue) {
    return;
  }

  loader.style.display = 'inline-block';

  try {
    const data = await getPicturesByQuery(queryValue);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
      showNoResultsMessage();
    } else {
      renderGallery(data.hits);
    }
  } catch (error) {
    loader.style.display = 'none';
    showFetchErrorMessage();
  } finally {
    form.reset();
  }
}
