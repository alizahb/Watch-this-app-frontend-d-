
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// User Authentication
export const register = async (username, password) => {
  return await axios.post(`${API_URL}/auth/register`, { username, password });
};

export const login = async (username, password) => {
  return await axios.post(`${API_URL}/auth/login`, { username, password });
};

// Watchlist Management
export const fetchWatchlists = async (token) => {
  return await axios.get(`${API_URL}/watchlists`, {
    headers: { Authorization: token }
  });
};

export const createWatchlist = async (token, title, description) => {
  return await axios.post(`${API_URL}/watchlists`, { title, description }, {
    headers: { Authorization: token }
  });
};

export const editWatchlist = async (token, watchlistId, title, description) => {
  return await axios.put(`${API_URL}/watchlists/${watchlistId}`, { title, description }, {
    headers: { Authorization: token }
  });
};

export const deleteWatchlist = async (token, watchlistId) => {
  return await axios.delete(`${API_URL}/watchlists/${watchlistId}`, {
    headers: { Authorization: token }
  });
};

// Movie Management within Watchlists
export const addMovieToWatchlist = async (token, watchlistId, movieId) => {
  return await axios.post(`${API_URL}/watchlists/${watchlistId}/movies`, { movieId }, {
    headers: { Authorization: token }
  });
};

export const removeMovieFromWatchlist = async (token, watchlistId, movieId) => {
  return await axios.delete(`${API_URL}/watchlists/${watchlistId}/movies/${movieId}`, {
    headers: { Authorization: token }
  });
};