import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '35888485-ef78d2b3836896c1b6f2f0b14';

const URL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';

const fetchImg = async (query, page) => {
  const response = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
  );
};
