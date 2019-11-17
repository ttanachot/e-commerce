import fetch from '../Utils/fetch';


const fetchItemList = async (params = '') => {
  try {
    const result = await fetch.get(`/items${params}`);
    return result.data;
  } catch (err) {
    throw err;
  }
};

const fetchItem = async (itemId) => {
  try {
    const result = await fetch.get(`/items/${itemId}`);
    return result;
  } catch (err) {
    throw err;
  }
};

const fetchCategories = async () => {
  try {
    const result = await fetch.get('/categories');
    return result.data;
  } catch (err) {
    throw err;
  }
}

export default {
  fetchItemList,
  fetchItem,
  fetchCategories,
};
