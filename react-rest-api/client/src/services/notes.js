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
