import axios from 'axios';

const apiService = axios.create({
  // Before proxying
  // baseURL: 'http://localhost:3020/api'
  // After proxying
  // baseURL: 'http://localhost:3000/api'
  baseURL: '/api'
});

export const list = async () => {
  try {
    const response = await apiService.get('/list');
    const notes = response.data.notes;
    return notes;
  } catch (error) {
    throw error;
  }
};

export const load = async id => {
  try {
    const response = await apiService.get(`/${id}`);
    const note = response.data.note;
    return note;
  } catch (error) {
    throw error;
  }
};
