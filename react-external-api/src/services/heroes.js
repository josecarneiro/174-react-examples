import axios from 'axios';

// const ACCESS_TOKEN = process.env.REACT_APP_HEROES_API_KEY;

/*
export const load = name =>
  new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
*/

export const load = async function(name) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.log('There was an error in async pokemon load service');
    throw error;
  }
};
