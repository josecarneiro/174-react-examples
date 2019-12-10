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

export const edit = async (id, note) => {
  try {
    await apiService.patch(`/${id}`, note);
  } catch (error) {
    throw error;
  }
};

export const remove = async id => {
  try {
    await apiService.delete(`/${id}`);
  } catch (error) {
    throw error;
  }
};

export const create = async note => {
  const data = new FormData();
  data.append('title', note.title);
  data.append('content', note.content);
  data.append('image', note.image);
  try {
    const response = await apiService.post(`/create`, data);
    return response.data.note;
  } catch (error) {
    throw error;
  }
};
