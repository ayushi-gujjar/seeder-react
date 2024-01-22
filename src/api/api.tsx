// api.js

import axios from 'axios';

const BASE_URL = 'http://localhost:3001'; // Replace with your API base URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPayments = async () => {
  try {
    const response = await api.get('/myPayments');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getContracts = async () => {
  try {
    const response = await api.get('/contracts');
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getCashKicks = async () => {
  try {
    const response = await api.get('/cahskciks');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNewCashKickContracts = async () => {
  try {
    const response = await api.get('/newcashkickContracts');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNewCashKick = async (payload: any) => {
  try {
    const response = await api.post('/cahskciks', payload);
    return response;
  } catch (error) {
    throw error;
  }
}


