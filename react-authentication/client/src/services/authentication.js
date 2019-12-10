import axios from 'axios';

const apiAuthenticationService = axios.create({
  baseURL: '/api/authentication'
});

export const signIn = async data => {
  try {
    const response = await apiAuthenticationService.post(`/sign-in`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signUp = async data => {
  try {
    const response = await apiAuthenticationService.post(`/sign-up`, data);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await apiAuthenticationService.post(`/sign-out`);
  } catch (error) {
    throw error;
  }
};

export const loadUserInformation = async () => {
  try {
    const response = await apiAuthenticationService.get(`/user-information`);
    return response.data.user;
  } catch (error) {
    throw error;
  }
};
