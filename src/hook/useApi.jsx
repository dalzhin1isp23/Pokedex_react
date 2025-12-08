import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

function handleError(method, endpoint, error) {
  console.error(`Error in ${method} request to ${endpoint}:`, {
    status: error.response?.status,
    message: error.response?.data?.message || error.message,
  });
}

function createService(resource) {
  return {

    async getAll(params = {}) {
      try {
        const response = await apiClient.get(resource, { params });
        return response.data;
      } catch (error) {
        handleError('GET', resource, error);
        throw error;
      }
    },

 
    async getById(id) {
      try {
        const response = await apiClient.get(`${resource}/${id}`);
        return response.data;
      } catch (error) {
        handleError('GET', `${resource}/${id}`, error);
        throw error;
      }
    },


    async getByName(name) {
      try {
        const response = await apiClient.get(resource, { params: { name } });
        return Array.isArray(response.data) ? response.data[0] : response.data;
      } catch (error) {
        handleError('GET', `${resource}?name=${name}`, error);
        throw error;
      }
    },

    async getWithParams(params = {}) {
      try {
        const response = await apiClient.get(resource, { params });
        return response.data;
      } catch (error) {
        handleError('GET', `${resource} with params ${JSON.stringify(params)}`, error);
        throw error;
      }
    },  async create(data) {
      try {
        const response = await apiClient.post(resource, data);
        return response.data;
      } catch (error) {
        handleError('POST', resource, error);
        throw error;
      }
    },

    async update(id, data) {
      try {
        const response = await apiClient.put(`${resource}/${id}`, data);
        return response.data;
      } catch (error) {
        handleError('PUT', `${resource}/${id}`, error);
        throw error;
      }
    },

    async delete(id) {
      try {
        await apiClient.delete(`${resource}/${id}`);
      } catch (error) {
        handleError('DELETE', `${resource}/${id}`, error);
        throw error;
      }
    },
  };
}


export const pokemonService = createService('pokemon');
export const abilityService = createService('ability');
export const typeService = createService('type');
export const moveService = createService('move');
export const speciesService = createService('pokemon-species');
export const evolutionChainService = createService('evolution-chain');

export { apiClient };
export default apiClient;
