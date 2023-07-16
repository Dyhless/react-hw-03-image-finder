import axios from 'axios';

const API_KEY = '37053026-4150c05ae3a340932daa6308e';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 12,
};

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(`?q=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

// export class Searchbar extends Component {}
